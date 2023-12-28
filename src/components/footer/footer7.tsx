import { year } from "@/mock/footer";
import { policy } from "@/mock/footer";
import { Column_1 } from "@/mock/footer";
function Footer7() {
  return (
    <div className="bg-base-200 text-base-content p-5 md:p-10">
      <footer className="footer footer-center">
        <h1 className="font-extrabold text-2xl">Logo</h1>
        <nav className="flex gap-5 flex-col md:flex-row">
          {Column_1.map((column) => (
            <a className="link link-hover font-semibold">{column}</a>
          ))}
        </nav>
      </footer>
      <div className="divider mt-6 md:mt-10 mb-3 md:mb-6"></div>
      <footer className="footer footer-center flex  md:justify-between flex-col md:flex-row gap-5 flex-col-reverse ">
        <p>@ {year} Relume. All rights reserved.</p>
        <div className="flex gap-4 flex-col md:flex-row">
          {policy.map((policy) => (
            <a className="link underline">{policy}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
export default Footer7;
