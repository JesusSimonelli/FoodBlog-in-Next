import Footer from "./footer";
import MainNavigation from "./mainNavigation";

export default function Layout(props) {
  return (
    <section>
      <MainNavigation />
      <main>{props.children}</main>

      <Footer />
    </section>
  );
}
