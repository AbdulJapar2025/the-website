import Link from "next/link";
import NavbarLayout from "./NavbarLayout";

// export default function Layout({ children }) {
//   return (
//     <div className="app ">
//       {/* <header className="header ">
//         <h1>
//           <Link href="/">The Website</Link>
//         </h1>

//         <nav>
//           <Link href="/community">Community</Link>
//         </nav>
//       </header> */}
//       <nav>
//         <NavbarLayout />
//       </nav>

//       <main className="main">{children}</main>
//     </div>
//   );
// }

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <nav>
        <NavbarLayout />
      </nav>

      <main className="main">{children}</main>
    </div>
  );
}
