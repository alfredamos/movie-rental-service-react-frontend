import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./utils/navigation/navigation-bar.util";

import { ListRental } from "./components/rentals/list-rental";
import { AddRental } from "./components/rentals/add-rental";
import { DeleteRental } from "./components/rentals/delete-rental";
import { DetailRental } from "./components/rentals/detail-rental";
import { EditRental } from "./components/rentals/edit-rental";

import { DeleteCustomer } from "./components/customers/delete-customer";
import { DetailCustomer } from "./components/customers/detail-customer";
import { ListCustomer } from "./components/customers/list-customer";

import { AddGenre } from "./components/genres/add-genre";
import { DeleteGenre } from "./components/genres/delete-genre";
import { DetailGenre } from "./components/genres/detail-genre";
import { EditGenre } from "./components/genres/edit-genre";
import { ListGenre } from "./components/genres/list-genre";

import { AddMovie } from "./components/movies/add-movie";
import { DeleteMovie } from "./components/movies/delete-movie";
import { DetailMovie } from "./components/movies/detail-movie";
import { EditMovie } from "./components/movies/edit-movie";
import { ListMovie } from "./components/movies/list-movie";

import { ChangePassword } from "./components/auth/change-password.auth";
import { EditProfile } from "./components/auth/edit-profile.auth";
import { Login } from "./components/auth/login.auth";
import { Signup } from "./components/auth/signup.auth";
import { Logout } from "./components/auth/logout.auth";
import { HomePage } from "./components/auth/home-page";
import { MustLoginPage } from "./components/auth/must-login";
import { NotAllowedPage } from "./components/auth/not-allowed-page";
import { LoginRoute } from "./utils/private-routes/login-route.util";
import { AuthUser } from "./models/auth/auth-user.auth";
import { authService } from "./services/auth.service";
import { useObservable } from "./utils/hooks/use-observable.hook";
import { UserType } from "./enum/user-type.enum";
import { AdminRoute } from "./utils/private-routes/admin-route.util";
import { LogoutPage } from "./components/auth/logout-page";

function App() {
  const authUser = useObservable(
    authService.authUser$,
    {} as AuthUser
  ) as AuthUser;

  const isLoggedIn = authUser.isLoggedIn;
  const isAdmin = authUser.userType === UserType.Admin;

  console.log({isLoggedIn});
  console.log({isAdmin});

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <AdminRoute isAdmin={isAdmin}>
              <ListRental />
            </AdminRoute>
          }
        />
        <Route
          path="/add-rental"
          element={
            <LoginRoute isLoggedIn={isLoggedIn!}>
              <AddRental />
            </LoginRoute>
          }
        />
        <Route
          path="/delete-rental/:id"
          element={
            <AdminRoute isAdmin={isAdmin}>
              <DeleteRental />
            </AdminRoute>
          }
        />
        <Route
          path="/detail-rental/:id"
          element={
            <LoginRoute isLoggedIn={isLoggedIn!}>
              <DetailRental />
            </LoginRoute>
          }
        />
        <Route
          path="/edit-rental/:id"
          element={
            <AdminRoute isAdmin={isAdmin}>
              <EditRental />
            </AdminRoute>
          }
        />

        <Route
          path="/delete-customer/:id"
          element={
            <AdminRoute isAdmin={isAdmin}>
              <DeleteCustomer />
            </AdminRoute>
          }
        />
        <Route
          path="/detail-customer/:id"
          element={
            <LoginRoute isLoggedIn={isLoggedIn!}>
              <DetailCustomer />
            </LoginRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <AdminRoute isAdmin={isAdmin}>
              <ListCustomer />
            </AdminRoute>
          }
        />

        <Route
          path="/add-genre"
          element={
            <AdminRoute isAdmin={isAdmin}>
              <AddGenre />
            </AdminRoute>
          }
        />
        <Route
          path="/delete-genre/:id"
          element={
            <AdminRoute isAdmin={isAdmin}>
              <DeleteGenre />
            </AdminRoute>
          }
        />
        <Route
          path="/detail-genre/:id"
          element={
            <LoginRoute isLoggedIn={isLoggedIn!}>
              <DetailGenre />
            </LoginRoute>
          }
        />
        <Route
          path="/edit-genre/:id"
          element={
            <AdminRoute isAdmin={isAdmin}>
              <EditGenre />
            </AdminRoute>
          }
        />
        <Route
          path="/genres"
          element={
            <LoginRoute isLoggedIn={isLoggedIn!}>
              <ListGenre />
            </LoginRoute>
          }
        />

        <Route
          path="/add-movie"
          element={
            <AdminRoute isAdmin={isAdmin}>
              <AddMovie />
            </AdminRoute>
          }
        />
        <Route
          path="/delete-movie/:id"
          element={
            <AdminRoute isAdmin={isAdmin}>
              <DeleteMovie />
            </AdminRoute>
          }
        />
        <Route
          path="/detail-movie/:id"
          element={
            <LoginRoute isLoggedIn={isLoggedIn!}>
              <DetailMovie />
            </LoginRoute>
          }
        />
        <Route
          path="/edit-movie/:id"
          element={
            <AdminRoute isAdmin={isAdmin}>
              <EditMovie />
            </AdminRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <LoginRoute isLoggedIn={isLoggedIn!}>
              <ListMovie />
            </LoginRoute>
          }
        />

        <Route
          path="/change-password"
          element={
            <LoginRoute isLoggedIn={isLoggedIn!}>
              <ChangePassword />
            </LoginRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <LoginRoute isLoggedIn={isLoggedIn!}>
              <EditProfile />
            </LoginRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/logout-page" element={<LogoutPage/>}/>
        <Route path="/must-login" element={<MustLoginPage />} />
        <Route path="/not-allowed" element={<NotAllowedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
