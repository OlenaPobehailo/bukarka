import { BooksContextProvider } from "components/Book/BooksContext";
import { OrderContextProvider } from "components/Order/OrderContext";
import OrderConfirmationPage from "pages/OrderConfirmationPage";
import OrderPage from "pages/OrderPage/OrderPage";
import PaymentPage from "pages/PaymentPage";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("pages/HomePage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));
const AboutPage = lazy(() => import("pages/AboutPage"));
const FavoritesPage = lazy(() => import("pages/FavoritesPage"));
const DeliveryPage = lazy(() => import("pages/DeliveryPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage"));
const CatalogPage = lazy(() => import("pages/CatalogPage"));
const BookClubPage = lazy(() => import("pages/BookClubPage"));
const PrivacyPolicyPage = lazy(() => import("pages/PrivacyPolicyPage"));
const TermsOfUsePage = lazy(() => import("pages/TermsOfUsePage"));
const BookPage = lazy(() => import("pages/BookPage"));

function App() {
  return (
    <BooksContextProvider>
      <OrderContextProvider>
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="books/:id" element={<BookPage />} />
              <Route path="favorites" element={<FavoritesPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="delivery" element={<DeliveryPage />} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route path="club" element={<BookClubPage />} />
              <Route path="privacy" element={<PrivacyPolicyPage />} />
              <Route path="terms" element={<TermsOfUsePage />} />

              <Route path="catalog" element={<CatalogPage />} />
              <Route path="order/:id" element={<OrderPage />} />
              <Route path="payment/:id" element={<PaymentPage />} />
              <Route
                path="confirmation/:id"
                element={<OrderConfirmationPage />}
              />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </div>
      </OrderContextProvider>
    </BooksContextProvider>
  );
}

export default App;
