import Head from "next/head";
import Layout from "../layout";
import HomePage from "./homepage";
import About from "./about";
import contactform from "./contactform";
import ProfileForm from "./profileform";
import FranchisePage from "./franchise";
import customerCareForm from "./customercare";
import Productdetail from "./productdetails";
import ProductCart from "./cart";
import Paymentmode from "./paymentmode";
import feedback from "./feedback";
import Faq from "./faq";
import Slot from "./slot";
import Thankyou from "./thankyou";
import ProductsPage from "./productpage";
import Checkout from "./checkout";
import Login from "./login";
import OrderDetails from "./orderdetail";
import OrderPage from "./orderpage";
import BeautyService from "./beautyservice";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Service Beauty Parlour</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        title="Best Beauty parlor service at home, beautician, makeup artist in Noida, Kolakta, Pune - HSBP"
        description="HSBP is one of the best beauty parlor service provide bridal makeup, facial, full body, leg, arm wax, hairdo, saree draping at home in Noida, Kolkata, Pune, Lucknow, Delhi"
      >
        <HomePage />
      </Layout>
    </>
  );
}
