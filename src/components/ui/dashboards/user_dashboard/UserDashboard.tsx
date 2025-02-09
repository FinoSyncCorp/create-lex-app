"use client";

import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MegaphoneIcon,
  SquaresPlusIcon,
  UserGroupIcon,
  XMarkIcon,
  CodeBracketIcon
} from "@heroicons/react/24/outline";
import {
  ChevronLeftIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true }, // Fully built dashboard with user info + crud operations
  { name: "Calendar", href: "/dashboard/crud/calender", icon: CalendarIcon, current: false }, // basic crud operation with a calender to add tasks etc
  { name: "Teams", href: "/teams", icon: UserGroupIcon, current: false }, // basic operations with options to add team members
  {
    name: "Directory",
    href: "#",
    icon: MagnifyingGlassCircleIcon,
    current: false,
  }, // basic fully functional search directory that searches within your database
  { name: "Studio", href: "#", icon: MegaphoneIcon, current: false }, // basic blog application, blog management
];
const secondaryNavigation = [
  { name: "Lex Developer", href: "#", icon: CodeBracketIcon },
  { name: "Vidat & Apps Settings", href: "#", icon: SquaresPlusIcon },
  { name: "Cloud Settings", href: "#", icon: CogIcon },
];
const tabs = [
  { name: "Profile", href: "/dashboard", current: true },
  { name: "Quick Start", href: "https://www.lex.finosync.com/documentation/quickstart/", current: false },
  { name: "Lex Course", href: "https://www.lex.finosync.com/documentation/quickstart/courses/lex", current: false },
];
const profile = {
  name: "Lex app user",
  imageUrl:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  coverImageUrl:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
  fields: {
    Phone: "(555) 123-4567",
    Email: "ricardocooper@example.com",
    Title: "Senior Front-End Developer",
    Team: "Product Development",
    Location: "San Francisco",
    Sits: "Oasis, 4th floor",
    Salary: "$145,000",
    Birthday: "June 8, 1990",
  },
};
const team = [
  {
    name: "Leslie Alexander",
    handle: "lesliealexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Foster",
    handle: "michaelfoster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dries Vincent",
    handle: "driesvincent",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    handle: "lindsaywalton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user, logout } = useAuth0();

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div className="flex h-full">
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-600/75 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative flex w-full max-w-xs flex-1 transform flex-col bg-white transition duration-300 ease-in-out focus:outline-none data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute right-0 top-0 -mr-12 pt-2 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="relative ml-1 flex size-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              <div className="h-0 flex-1 overflow-y-auto pb-4 pt-5">
                <nav aria-label="Sidebar" className="mt-5">
                  <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-4 size-6"
                          )}
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <hr
                    aria-hidden="true"
                    className="my-5 border-t border-gray-200"
                  />
                  <div className="space-y-1 px-2">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="mr-4 size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
              <div className="flex shrink-0 border-t border-gray-200 p-4">
                <a href="#" className="group block shrink-0">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <button
                        onClick={() =>
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          })
                        }
                        className="text-base bg-red-600 p-1 rounded-md font-medium text-gray-100 group-hover:text-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </DialogPanel>
            <div aria-hidden="true" className="w-14 shrink-0">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:shrink-0">
          <div className="flex w-64 flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
              <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
                <nav aria-label="Sidebar" className="mt-5 flex-1">
                  <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-200 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-3 size-6 shrink-0"
                          )}
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <hr
                    aria-hidden="true"
                    className="my-5 border-t border-gray-200"
                  />
                  <div className="flex-1 space-y-1 px-2">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="mr-3 size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
              <div className="flex shrink-0 border-t border-gray-200 p-4">
                <a href="#" className="group block w-full shrink-0">
                  <div className="flex items-center">
                    <div className="ml-3">
                      {/* <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="text-base font-medium text-gray-700 group-hover:text-gray-900">Logout</button> */}
                      <button
                        onClick={() =>
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          })
                        }
                        className="text-sm bg-red-600 p-1 rounded-md font-medium text-gray-100 group-hover:text-gray-700"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="lg:hidden">
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
              <div>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="-mr-3 inline-flex size-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="relative z-0 flex flex-1 overflow-hidden">
            <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
              >
                <a
                  href="#"
                  className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
                >
                  <ChevronLeftIcon
                    aria-hidden="true"
                    className="-ml-2 size-5 text-gray-400"
                  />
                  <span>Directory</span>
                </a>
              </nav>

              <article>
                {/* Profile header */}
                <div>
                  <div>
                    <img
                      alt=""
                      src={profile.coverImageUrl}
                      className="h-32 w-full object-cover lg:h-48"
                    />
                  </div>
                  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                      <div className="flex">
                        <img
                          alt=""
                          src={user?.picture}
                          className="size-24 rounded-full ring-4 ring-white sm:size-32"
                        />
                      </div>
                      <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                          <h1 className="truncate text-2xl font-bold text-cyan-300">
                            {user?.given_name && user?.family_name
                              ? `${user.given_name} ${user.family_name}`
                              : user?.name || user?.nickname}
                          </h1>
                        </div>
                        <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                          <button
                            type="button"
                            className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            <EnvelopeIcon
                              aria-hidden="true"
                              className="-ml-0.5 size-5 text-gray-400"
                            />
                            Message
                          </button>
                          <button
                            type="button"
                            className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            <PhoneIcon
                              aria-hidden="true"
                              className="-ml-0.5 size-5 text-gray-400"
                            />
                            Call
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                      <h1 className="truncate text-2xl font-bold text-gray-900">
                        {" "}
                        {user?.given_name && user?.family_name
                          ? `${user.given_name} ${user.family_name}` // Google OAuth users
                          : user?.username ||
                            user?.name ||
                            user?.nickname ||
                            user?.email}
                      </h1>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="mt-6 sm:mt-2 2xl:mt-5">
                  <div className="border-b border-gray-200">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                      <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                        {tabs.map((tab) => (
                          <a
                            key={tab.name}
                            href={tab.href}
                            aria-current={tab.current ? "page" : undefined}
                            className={classNames(
                              tab.current
                                ? "border-cyan-500 text-gray-900"
                                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                              "whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
                            )}
                          >
                            {tab.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>

                {/* Description list */}
                {/* BASIC USER PROFILE CRUD */}
                <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    {Object.keys(profile.fields).map((field) => (
                      <div key={field} className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          {field}
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {profile.name}
                        </dd>
                      </div>
                    ))}
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">
                        About
                      </dt>
                      <dd
                        dangerouslySetInnerHTML={{ __html: profile.about }}
                        className="mt-1 max-w-prose space-y-5 text-sm text-gray-900"
                      />
                    </div>
                  </dl>
                </div>

                {/* Team member list */}
                <div className="mx-auto mt-8 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
                  <h2 className="text-sm font-medium text-gray-500">
                    Team members
                  </h2>
                  <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {team.map((person) => (
                      <div
                        key={person.handle}
                        className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2 hover:border-gray-400"
                      >
                        <div className="shrink-0">
                          <img
                            alt=""
                            src={person.imageUrl}
                            className="size-10 rounded-full"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <a href="#" className="focus:outline-none">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            <p className="text-sm font-medium text-gray-900">
                              {person.name}
                            </p>
                            <p className="truncate text-sm text-gray-500">
                              {person.role}
                            </p>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
