import React, { useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "./Components/Layouts/MainLayout";
import { LessonDetails } from "./Components/Page/LessonDetails";
import { Login } from "./Components/Page/Login";
import NotFound from "./Components/Page/NotFound";
import { Schedule } from "./Components/Page/Schedule";
import { StudentCheck } from "./Components/Page/StudentCheck";
import { UniversityStudents } from "./Components/Page/UniversityStudents";
import { StudentVerification } from "./Components/Page/StudentVerification";

function App() {
  const nav = useNavigate();

  if (
    localStorage.getItem("token") === null ||
    localStorage.getItem("token") === undefined
  ) {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="universitystudents" element={<UniversityStudents />} />
          <Route path="schedule" element={<Outlet />}>
            <Route index element={<Schedule />} />
            <Route path="lesson/:title/:id" element={<LessonDetails />} />
            <Route path="studentcheck/:id/:email" element={<StudentCheck/>}/>
            <Route path="studentverification/:id/:email" element={<StudentVerification/>}/>
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
