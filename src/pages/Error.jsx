import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <section class="page_404 animate__animated  animate__fadeIn">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-12 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
              </div>

              <div class="contant_box_404 mx-auto">
                <h3 class="h2">UH OH! You're lost.</h3>

                <p>
                  The page you are looking for does not exist. How you got here
                  is a mystery. But you can click the button below to go back to
                  the homepage.{" "}
                </p>

                <Link to="/" className="link_404">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
