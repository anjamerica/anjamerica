import React from "react";
import Footer from "../../../../components/landin/Footer";
import Layout from "../../../../components/layout/Layout";

export default function ApplyFourUni() {
  return (
    <>
      <div className="w-full">
        <div className="w-full">
          {/* Banner */}
          <div className="w-full pf_applyfourUni h-screen overflow-hidden relative">
            <span className="w-full max-w-2xl block absolute top-1/2 left-24 cs_center_caption">
              <h1 className="text-6xl font-bold font-opensans leadi  ng-[60px] block pb-4 text-white ">
                CRM system for study abroad needs!
              </h1>
              <p className="text-lg text-white ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s
              </p>
            </span>
            <div className="w-full aubanner">
              {/* <img
                className="w-full"
                src="/projects/applyfouruni/mobile_app.png"
              /> */}
            </div>
          </div>
          {/* About */}
          <div className="w-full min-h-screen flex items-center justify-center">
            <div className="w-full max-w-7xl min-h-screen flex flex-col justify-between items-between pt-24">
              <h2 className="w-full text-center uppercase pb-16 text-3xl">
                <span className="text-sm">About</span>
                <br />
                Client Goals, Challenges & Context
              </h2>
              <ul className="w-full flex flex-wrap pb-16">
                <li className="w-1/3 p-4">
                  <div className="w-full flex flex-col justify-center items-center">
                    <span className="w-16 h-16 block">
                      <img
                        className="w-full"
                        src="/projects/applyfouruni/target.svg"
                      />
                    </span>
                    <h3 className="text-2xl font-semibold py-4">Client Goal</h3>
                    <p className="text-center">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </li>
                <li className="w-1/3 p-4">
                  <div className="w-full flex flex-col justify-center items-center">
                    <span className="w-16 h-16 block">
                      <img
                        className="w-full"
                        src="/projects/applyfouruni/challenges.svg"
                      />
                    </span>
                    <h3 className="text-2xl font-semibold py-4">Client Goal</h3>
                    <p className="text-center">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </li>
                <li className="w-1/3 p-4">
                  <div className="w-full flex flex-col justify-center items-center">
                    <span className="w-16 h-16 block">
                      <img
                        className="w-full"
                        src="/projects/applyfouruni/focus.svg"
                      />
                    </span>
                    <h3 className="text-2xl font-semibold py-4">Client Goal</h3>
                    <p className="text-center">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </li>
              </ul>
              <span className="block">
                <img
                  className="w-full"
                  src="/projects/applyfouruni/flat-one.png"
                />
              </span>
            </div>
          </div>
          {/* Project Breif */}
          <div className="pbreif h-screen">
            <div className="w-full h-screen bg-secondary-1 bg-opacity-80 flex justify-between py-24 items-center">
              <div className="w-1/2 px-24 flex justify-end">
                <div className="w-full max-w-md">
                  <img
                    className="w-full"
                    src="/projects/applyfouruni/problem.png"
                  />
                </div>
              </div>
              <div className="w-1/2 flex justify-end">
                <div className="w-full bg-secondary-2 bg-opacity-60 text-white p-12 rounded-tl-3xl rounded-bl-3xl max-w-4xl pr-24">
                  <h2 className="text-4xl font-bold font-opensans leadi  ng-[60px] block pb-4 text-white">
                    Project Breif
                  </h2>
                  <p className="leading-8">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Onboarding */}
          <div className="w-full flex flex-wrap">
            <div className="w-1/2 p-32 pb-0 bg-secondary-2">
              <img
                className="w-full"
                src="/projects/applyfouruni/onboard.png"
              />
            </div>
            <div className="w-1/2 p-24 bg-secondary-3 text-white flex items-left justify-center flex-col">
              <h2 className="text-4xl font-bold font-opensans leadi  ng-[60px] block pb-4 text-white">
                Onboarding
              </h2>
              <p className="leading-8">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
          </div>
          {/* Dashboard */}
          <div className="w-full h-screen bg-secondary-1">
            <div className="w-full py-24 flex flex-col justify-center items-center h-screen">
              <div className="w-full max-w-3xl">
                <img
                  className="w-full"
                  src="/projects/applyfouruni/dashboard.png"
                />
              </div>
              <div className="w-full text-white text-center max-w-7xl">
                <h2 className="text-4xl font-bold font-opensans leading-[60px] block pb-4 text-white">
                  Onboarding
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </p>
              </div>
            </div>
          </div>
          {/* Dashboard Mobile App */}
          <div className="w-full min-h-screen flex justify-center bg-secondary-2">
            <div className="w-full min-h-screen max-w-7xl text-white pt-24 flex flex-col justify-between items-between">
              <div className="w-[40%]">
                <h2 className="text-4xl font-bold font-opensans leading-[60px] block pb-4 text-white">
                  Dashboard Mobile App
                </h2>
                <p className="leading-8">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </p>
              </div>
              <div className="w-full relative">
                <img
                  className="w-full"
                  src="/projects/applyfouruni/flat-one.png"
                />
                <ul className="w-full max-w-[33.33%] absolute bottom-80 right-64 flex flex-wrap">
                  <li className="w-1/2 p-2">
                    <img
                      className="w-full"
                      src="/projects/applyfouruni/recommendation_card.png"
                    />
                  </li>
                  <li className="w-1/2 p-2">
                    <img
                      className="w-full"
                      src="/projects/applyfouruni/application_card.png"
                    />
                  </li>
                  <li className="w-1/2 p-2">
                    <img
                      className="w-full"
                      src="/projects/applyfouruni/counselling_card.png"
                    />
                  </li>
                  <li className="w-1/2 p-2">
                    <img
                      className="w-full"
                      src="/projects/applyfouruni/payments_card.png"
                    />
                  </li>
                  <li className="w-1/2 p-2">
                    <img
                      className="w-full"
                      src="/projects/applyfouruni/profile_card.png"
                    />
                  </li>
                  <li className="w-1/2 p-2">
                    <img
                      className="w-full"
                      src="/projects/applyfouruni/events_card.png"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Mobile App Sidenav */}
          <div className="w=full pf_sidenav h-screen flex justify-center">
            <div className="w-full h-screen py-24 max-w-7xl flex flex-wrap">
              <div className="w-[60%]">
                <img
                  className="w-full"
                  src="/projects/applyfouruni/mobile_app_side_nav.png"
                />
              </div>
              <div className="w-[40%] pl-16">
                <h2 className="text-4xl font-opensans leading-[60px] block pb-4">
                  Mobile App Sidenav
                </h2>
                <ul>
                  <li className="w-full py-2">
                    <div className="w-full bg-secondary-4 border-4 border-opacity-30 border-solid border-secondary-5 p-4 rounded-2xl bg-opacity-60">
                      <h3 className="text-2xl font-opensans pb-2 text-white">
                        Onboarding
                      </h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour.
                      </p>
                    </div>
                  </li>
                  <li className="w-full py-2">
                    <div className="w-full bg-secondary-4 border-4 border-opacity-30 border-solid border-secondary-5 p-4 rounded-2xl bg-opacity-60">
                      <h3 className="text-2xl font-opensans pb-2 text-white">
                        Onboarding
                      </h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour.
                      </p>
                    </div>
                  </li>
                  <li className="w-full py-2">
                    <div className="w-full bg-secondary-4 border-4 border-opacity-30 border-solid border-secondary-5 p-4 rounded-2xl bg-opacity-60">
                      <h3 className="text-2xl font-opensans pb-2 text-white">
                        Onboarding
                      </h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour.
                      </p>
                    </div>
                  </li>
                  <li className="w-full py-2">
                    <div className="w-full bg-secondary-4 border-4 border-opacity-30 border-solid border-secondary-5 p-4 rounded-2xl bg-opacity-60">
                      <h3 className="text-2xl font-opensans pb-2 text-white">
                        Onboarding
                      </h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Great Feature */}
          <div className="w-full flex justify-center min-h-screen">
            <div className="w-full max-w-7xl py-24 min-h-screen flex flex-wrap">
              <div className="w-1/2 relative mb-[8%]">
                <span className="w-full max-w-sm block">
                  <img
                    className="w-full"
                    src="/projects/applyfouruni/designation.png"
                  />
                </span>
                <span className="absolute left-52 top-24 max-w-sm w-full">
                  <img
                    className="w-full"
                    src="/projects/applyfouruni/designation.png"
                  />
                </span>
                <span className="w-full max-w-sm block absolute left-64 bottom-10">
                  <img
                    className="w-full"
                    src="/projects/applyfouruni/designation_card.png"
                  />
                </span>
              </div>
              <div className="w-1/2 pl-24">
                <h2 className="text-4xl font-bold font-opensans leading-[60px] block pb-4 uppercase">
                  A GREAT FEATURES AND UI FOR YOUR APPLICATION
                </h2>
                <p className="leading-8">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

ApplyFourUni.getLayout = Layout;
