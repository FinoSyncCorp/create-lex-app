"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "My Config", href: "#" },
  { name: "How to use Lex", href: "#" },
  { name: "Get started", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-2 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Lex</span>
            <img alt="" src="/3.png" className="h-12 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isAuthenticated ? (
            // If user is logged in, show "Dashboard" button
            <button
              onClick={() => navigate("/dashboard")}
              className=" border border-black text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition"
            >
              Dashboard &rarr;
            </button>
          ) : (
            // If user is NOT logged in, show "Log in" button
            <button
              onClick={() =>
                loginWithRedirect({
                  authorizationParams: {
                    screen_hint: "signup",
                  },
                })
              }
              className="bg-pink border border-black text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </button>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Lex</span>
              <img alt="" src="/nexus.png" className="h-12 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                {isAuthenticated ? (
                  // If user is logged in, show "Dashboard" button
                  <button
                    onClick={() => navigate("/dashboard")}
                    className=" border border-black text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition"
                  >
                    Dashboard &rarr;
                  </button>
                ) : (
                  // If user is NOT logged in, show "Log in" button
                  <button
                    onClick={() =>
                      loginWithRedirect({
                        authorizationParams: {
                          screen_hint: "signup",
                        },
                      })
                    }
                    className=" border border-black text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition"
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
