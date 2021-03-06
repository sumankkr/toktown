import React from "react";
function Header() {
    return (
        <header className="c-header-wr">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="c-logo-wr"> <a href="https://meet.tok.town">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306.8 70.8">
                    <circle cx="30.9" cy="34.2" r="3.8" fill="#ff0201" />
                    <circle cx="41.9" cy="34.2" r="3.8" />
                    <circle cx="19.8" cy="34.2" r="3.8" />
                    <path d="M30.9 8.8c-14 0-25.4 11.4-25.4 25.4s11.4 25.4 25.4 25.4 25.4-11.4 25.4-25.4S44.9 8.8 30.9 8.8zm0 45.1c-10.9 0-19.7-8.8-19.7-19.7S20 14.5 30.9 14.5s19.7 8.8                  19.7 19.7-8.8 19.7-19.7 19.7zm50.9-32.7v32.4H74V21.2H61.5v-7.3h32.9v7.3H81.8zm38.9 18.5c0 8.5-6.2 14.6-14.4 14.6s-14.4-6.2-14.4-14.6c0-8.5 6.2-14.6 14.4-14.6s14.4                  6.1 14.4 14.6zm-7.4 0c0-5.2-3.4-7.8-7-7.8s-7 2.6-7 7.8 3.4 7.8 7 7.8 7-2.5 7-7.8zm29-2.1l11.3 16h-9.1L137.1 43l-3.1 3.2v7.3h-7.4V13h7.4v23.2l9.5-10.2h9.7l-10.9                  11.6zm32.9-16.4v32.4h-7.8V21.2h-12.5v-7.3h32.9v7.3h-12.6zm38.9 18.5c0 8.5-6.2 14.6-14.4 14.6s-14.4-6.2-14.4-14.6c0-8.5 6.2-14.6 14.4-14.6s14.4 6.1 14.4                  14.6zm-7.5 0c0-5.2-3.4-7.8-7-7.8s-7 2.6-7 7.8 3.4 7.8 7 7.8c3.7.1 7-2.5 7-7.8zM242.7 26l5.9 17.8 5.1-17.8h7.4l-8.6 27.6H245l-6.4-18.8-6.3 18.8h-7.6L215.9                  26h7.8l5.1 17.7 6-17.7h7.9zm30.5 27.5h-7.4V26h7.2v3.4c1.7-2.9 5-4.1 8-4.1 6.8 0 10 4.9 10 10.9v17.4h-7.4V37.5c0-3.1-1.5-5.5-5.1-5.5-3.2 0-5.2 2.5-5.2 5.7v15.8z"> </path>
                  </svg>
                </a> <span>
        
                  <picture>
                    <source srcSet="./img/header-bg.webp" type="image/webp" alt="" />
                    <source srcSet="./img/header-bg.jpg" type="image/jpg" alt="" />
                    <img src="./img/header-bg.jpg" alt="" /> </picture>
                </span> </div>
            </div>
            <div className="col-6">
              <div className="c-setting-wr d-flex justify-content-end"> <a href="#" data-toggle="modal" data-target=".c-setting-modal">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m499.95 197.7-39.352-8.5547c-3.4219-10.477-7.6602-20.695-12.664-30.539l21.785-33.887c3.8906-6.0547 3.0352-14.004-2.0508-19.09l-61.305-61.305c-5.0859-5.0859-13.035-5.9414-19.09-2.0508l-33.887 21.785c-9.8438-5.0039-20.062-9.2422-30.539-12.664l-8.5547-39.352c-1.5273-7.0312-7.7539-12.047-14.949-12.047h-86.695c-7.1953 0-13.422 5.0156-14.949 12.047l-8.5547 39.352c-10.477 3.4219-20.695 7.6602-30.539 12.664l-33.887-21.785c-6.0547-3.8906-14.004-3.0352-19.09 2.0508l-61.305 61.305c-5.0859 5.0859-5.9414 13.035-2.0508 19.09l21.785 33.887c-5.0039 9.8438-9.2422 20.062-12.664 30.539l-39.352 8.5547c-7.0312 1.5312-12.047 7.7539-12.047 14.949v86.695c0 7.1953 5.0156 13.418 12.047 14.949l39.352 8.5547c3.4219 10.477 7.6602 20.695 12.664 30.539l-21.785 33.887c-3.8906 6.0547-3.0352 14.004 2.0508 19.09l61.305 61.305c5.0859 5.0859 13.035 5.9414 19.09 2.0508l33.887-21.785c9.8438 5.0039 20.062 9.2422 30.539 12.664l8.5547 39.352c1.5273 7.0312 7.7539 12.047 14.949 12.047h86.695c7.1953 0 13.422-5.0156 14.949-12.047l8.5547-39.352c10.477-3.4219 20.695-7.6602 30.539-12.664l33.887 21.785c6.0547 3.8906 14.004 3.0391 19.09-2.0508l61.305-61.305c5.0859-5.0859 5.9414-13.035 2.0508-19.09l-21.785-33.887c5.0039-9.8438 9.2422-20.062 12.664-30.539l39.352-8.5547c7.0312-1.5312 12.047-7.7539 12.047-14.949v-86.695c0-7.1953-5.0156-13.418-12.047-14.949zm-152.16 58.297c0 50.613-41.18 91.793-91.793 91.793s-91.793-41.18-91.793-91.793 41.18-91.793 91.793-91.793 91.793 41.18 91.793 91.793z" />
                  </svg>
                </a> <span>
                  <picture>
                    <source srcSet="./img/setting-bg.webp" type="image/webp" alt="" />
                    <source srcSet="./img/setting-bg.jpg" type="image/jpg" alt="" />
                    <img src="./img/setting-bg.jpg" alt="" /> </picture>
                </span> </div>
            </div>
          </div>
        </div>
      </header>
        );
    }
    export default Header;
