import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Community", href: "/community" },
  { name: "Projects", href: "/projects" },
  { name: "Calendar", href: "/calendar" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // penting untuk Pages Router (hindari hydration error)
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Disclosure
      as="nav"
      className="bg-gray-800 dark:bg-gray-900 fixed top-0 inset-x-0 z-50 border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-2">
            <DisclosureButton className="sm:hidden rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white">
              <Bars3Icon className="h-6 w-6 data-open:hidden" />
              <XMarkIcon className="h-6 w-6 hidden data-open:block" />
            </DisclosureButton>

            <Link href="/" className="flex items-center gap-2">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
                className="h-8 w-auto"
              />
              <span className="text-white font-semibold">The Website</span>
            </Link>
          </div>

          {/* Center */}
          <div className="hidden sm:flex gap-6">
            {navigation.map((item) => {
              const active = router.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    active
                      ? "text-white border-b-2 border-indigo-500"
                      : "text-gray-300 hover:text-white",
                    "text-sm font-medium pb-1"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="rounded-full p-2 text-gray-400 hover:bg-white/10 hover:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => {
            const active = router.pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  active
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
