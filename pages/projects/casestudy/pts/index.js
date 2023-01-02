import React from "react";
import Footer from "../../../../components/landin/Footer";
import Layout from "../../../../components/layout/Layout";

export default function PurplePatch() {
  return (
    <>
      <div className="w-full ">
        <div className="w-full font-opensans">
          {/* Banner */}
          <section className="w-full min-h-screen pf_pts">
            <div className="w-full flex justify-center ptsfirstcurve">
              <div className="w-full max-w-7xl flex pt-24">
                <div className="w-1/2">
                  <img
                    className="w-full max-w-md"
                    src="/projects/pts/pls-banner-img.png"
                  />
                </div>
                <div className="w-1/2 pt-32">
                  <h1 className="text-9xl text-white font-black">
                    Fast & Accurate
                  </h1>
                </div>
              </div>
            </div>
          </section>
          {/* Challenges */}
          <section className="w-full min-h-screen flex justify-center relative px-32">
            <div className="w-full flex">
              <div className="w-[60%] flex items-center pr-1">
                <div className="w-full h-72 bg-secondary-10 -mt-6 relative"></div>
                <img
                  className="w-full max-w-2xl absolute z-20 left-16 top-1/2 commontransform"
                  src="/projects/pts/challenges.png"
                />
              </div>
              <div className="w-[40%] pl-1">
                <ul className="w-full">
                  <li className="w-full py-1">
                    <div className="w-full p-6 bg-secondary-9">
                      <h3 className="w-full text-center text-xl pb-4">
                        Client Goal
                      </h3>
                      <p className="leading-8">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
                      </p>
                    </div>
                  </li>
                  <li className="w-full py-1">
                    <div className="w-full p-6 bg-secondary-9">
                      <h3 className="w-full text-center text-xl pb-4">
                        Client Goal
                      </h3>
                      <p className="leading-8">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
                      </p>
                    </div>
                  </li>
                  <li className="w-full py-1">
                    <div className="w-full p-6 bg-secondary-9">
                      <h3 className="w-full text-center text-xl pb-4">
                        Client Goal
                      </h3>
                      <p className="leading-8">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* Solutions */}
          <section className="w-full min-h-screen flex justify-center">
            <div className="w-full max-w-7xl flex">
              <div className="w-[40%]">
                <img className="w-full" src="/projects/pts/cardio-check.png" />
              </div>
              <div className="w-[60%]">
                <h3 className="w-full text-xl pb-4">Client Goal</h3>
                <p className="leading-8 pb-10">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
                <h3 className="w-full text-xl pb-4">Client Goal</h3>
                <p className="leading-8 pb-10">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
                <h3 className="w-full text-xl pb-4">Client Goal</h3>
                <p className="leading-8">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
              </div>
            </div>
          </section>
          {/* Barcode */}
          <section className="w-full min-h-screen flex justify-center">
            <div className="w-full max-w-7xl flex items-center">
              <div className="w-1/2 pr-16">
                <h2 className="w-full text-xl pb-4">
                  There are many variations of passages
                </h2>
                <p className="pb-4 leading-8">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
                <p className="pb-4 leading-8">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form,
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form,
                </p>
              </div>
              <div className="w-1/2">
                <img className="w-full" src="/projects/pts/barcode.png" />
              </div>
            </div>
          </section>
          {/* Verification */}
          <section className="w-full min-h-screen flex justify-center">
            <div className="w-full max-w-7xl flex items-center">
              <div className="w-[40%]">
                <img
                  className="w-full"
                  src="/projects/pts/otp-verification.png"
                />
              </div>
              <div className="w-[60%] pl-16">
                <h2 className="text-4xl pb-6">OTP Verification</h2>
                <p className="text-xl font-semibold pb-6">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form,
                </p>
                <ul className="text-xl leading-[48px]">
                  <li className="pl-16 diamondbullet relative">
                    There are many variations of passages ...
                  </li>
                  <li className="pl-16 diamondbullet relative">
                    There are many variations of passages ...
                  </li>
                  <li className="pl-16 diamondbullet relative">
                    There are many variations of passages ...
                  </li>
                  <li className="pl-16 diamondbullet relative">
                    There are many variations of passages ...
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* Screens */}
          <section className="w-full min-h-screen py-32">
            <div className="w-2/3 absolute pl-32">
              <h2 className="text-4xl pb-6">Application Screens</h2>
              <p className="w-full pb-8">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <p className="w-2/3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
            </div>
            <img className="w-full" src="/projects/pts/group-image.png" />
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
PurplePatch.getLayout = Layout;
