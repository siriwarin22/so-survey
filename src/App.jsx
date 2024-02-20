import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Lesson from "./pages/lesson/Lesson";
import Quiz from "./pages/quiz/Quiz";
import Video3D from "./pages/video3d/Video3D";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from 'react-redux'
import { setWidthSize } from "./redux/appSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/lessons/:id/:page",
    element: <Lesson />
  },
  {
    path: "/quiz/:id",
    element: <Quiz />
  },
  {
    path: "/3d/:id",
    element: <Video3D />
  },
]);
function App() {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getWidth = () => {
      if (elementRef.current) {
        const newWidth = elementRef.current.offsetWidth;
        setWidth(newWidth);
      }
    };
    getWidth();
    const handleResize = () => getWidth();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    dispatch(setWidthSize(width));
  }, [width]);
  return (
    <div ref={elementRef}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
