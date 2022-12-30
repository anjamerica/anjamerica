import React from "react";
import Footer from "../../../../components/landin/Footer";
import Layout from "../../../../components/layout/Layout";

export default function PurplePatch() {
  return (
    <>
      <div className="w-full">
        <div className="w-full overflow-hidden">
          {/* Banner */}
          <section className="w-full min-h-screen">
            <div className="w-full min-h-sreen flex justify-end relative">
              <img
                className="w-full max-w-6xl"
                src="/projects/purplepatch/banner-bkg.png"
              />
              <caption className="flex justify-left absolute flex-col left-20 top-36 max-w-lg text-left">
                <img
                  className="w-64"
                  src="/projects/purplepatch/purple-logo.png"
                />
                <h1 className="text-5xl pt-8 leading-[60px]">
                  English Learning Management System
                </h1>
              </caption>
              <img
                className="w-full max-w-3xl absolute top-1/2 ppebannerimg right-16"
                src="/projects/purplepatch/purple-banner.png"
              />
            </div>
          </section>
          {/* Admin Panel */}
          <section className="w-full  min-h-screen ppepinkblue">
            <div className="w-full ppefirstcurve text-white flex justify-center">
              <div className="w-full max-w-7xl flex justify-between items-center">
                <div className="w-1/3">
                  <h2 className="text-5xl pt-8 leading-[60px]">Admin Panel</h2>
                  <ul className="leading-[48px]">
                    <li>Overview</li>
                    <li>Edit Content </li>
                    <li>User Managment </li>
                    <li>Message </li>
                    <li>Calendar </li>
                    <li>Analytics</li>
                  </ul>
                </div>
                <div className="w-2/3 flex justify-end">
                  <img
                    className="w-full max-w-3xl"
                    src="/projects/purplepatch/admin-panel-pic.png"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Goals and Challenges */}
          <section className="w-full  min-h-screen pt-48 flex justify-center">
            <div className="w-full max-w-7xl flex justify-end">
              <div className="w-full max-w-xl relative">
                <img className="w-full" src="/projects/purplepatch/goal.png" />
                <div className="rounded-2xl p-8 bg-secondary-6 max-w-2xl w-full absolute -top-12 right-[400px]">
                  <h2 className="text-5xl pb-4">Client Goal</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </div>
                <div className="rounded-2xl p-8 bg-secondary-6 max-w-2xl w-full absolute top-64 right-[550px]">
                  <h2 className="text-5xl pb-4">Client Goal</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
                <div className="rounded-2xl p-8 bg-secondary-6 max-w-2xl w-full absolute -bottom-[24px] right-[95px]">
                  <h2 className="text-5xl pb-4">Client Goal</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Breif & Solutions */}
          <section className="w-full min-h-screen ppepinkbluetwo flex justify-center">
            <div className="w-full min-h-screen text-white py-32 pt-48 max-w-7xl">
              <ul className="w-full flex flex-col topstrip">
                <li className="pt-[30px] block relative">
                  <div className="ppecircle w-full border-l-2 border-solid border-secondary-5 flex flex-col pl-8 pb-8">
                    <h2 className="text-5xl pb-4 -mt-10">Project Breif</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
                    </p>
                  </div>
                </li>
                <li className="pt-[30px] block relative">
                  <div className="ppecircle w-full border-l-2 border-solid border-secondary-5 flex flex-col pl-8 pb-8">
                    <h2 className="text-5xl pb-4 -mt-10">Project Breif</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
                    </p>
                  </div>
                </li>
                <li className="pt-[30px] block relative">
                  <div className="ppecircle w-full border-l-2 border-solid border-secondary-5 flex flex-col pl-8 pb-8">
                    <h2 className="text-5xl pb-4 -mt-10">Project Breif</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* Key Features */}
          <section className="w-full min-h-screen flex justify-center">
            <div className="w-full max-w-7xl py-20">
              <h2 className="text-5xl pb-8 w-full text-center">Key Features</h2>
              <div className="w-full">
                <ul className="w-full flex">
                  <li className="px-2 w-1/3">
                    <div className="w-full rounded-2xl bg-secondary-7 p-8">
                      <h3 className="w-full text-center text-xl pb-4">
                        Students
                      </h3>
                      <ul className="pl-4 leading-[48px]">
                        <li>Student Dashboard</li>
                        <li>Interactive Sessions for students</li>
                        <li>Detailed reports based on Grades</li>
                        <li>Attendance Tracking system</li>
                        <li>Sudents gets ontime Notifications</li>
                        <li>Students gets Feedbacks</li>
                        <li>Mock Test for Students</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                      </ul>
                    </div>
                  </li>
                  <li className="px-2 w-1/3">
                    <div className="w-full rounded-2xl bg-secondary-7 p-8">
                      <h3 className="w-full text-center text-xl pb-4">
                        Students
                      </h3>
                      <ul className="pl-4 leading-[48px]">
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                      </ul>
                    </div>
                  </li>
                  <li className="px-2 w-1/3">
                    <div className="w-full rounded-2xl bg-secondary-7 p-8">
                      <h3 className="w-full text-center text-xl pb-4">
                        Students
                      </h3>
                      <ul className="pl-4 leading-[48px]">
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                        <li>Student Dashboard</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* Onboarding */}
          <section className="w-full overflow-x-hidden">
            <div className="w-full bg-secondary-6">
              <div className="w-full ppesecondcurve flex justify-center relative py-96">
                <div className="w-full max-w-7xl flex">
                  <div className="w-2/3 pt-4">
                    <div className="w-full absolute -left-48 top-1/2 commontransform max-w-5xl">
                      <img
                        className="w-full relative z-20"
                        src="/projects/purplepatch/onboarding.png"
                      />
                      <img
                        className="w-full absolute left-0 -top-48 max-w-xl"
                        src="/projects/purplepatch/shape-circle.png"
                      />

                      <img
                        className="w-64 absolute -right-24 bottom-32 max-w-5xl"
                        src="/projects/purplepatch/shape-circle-small.png"
                      />
                    </div>
                  </div>
                  <div className="w-1/3">
                    <h2 className="text-5xl pb-8 w-full">Onboarding</h2>
                    <ul className="pl-4 leading-[48px]">
                      <li>There are many variations of passagess.</li>
                      <li>There are many variations of passagess.</li>
                      <li>There are many variations of passagess.</li>
                      <li>There are many variations of passagess.</li>
                      <li>There are many variations of passagess.</li>
                      <li>There are many variations of passagess.</li>
                      <li>There are many variations of passagess.</li>
                      <li>There are many variations of passagess.</li>
                      <li>There are many variations of passagess.</li>
                      <li>There are many variations of passagess.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-7xl text-center py-8">
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
          </section>
          <div className="w-full flex justify-center py-8">
            <span className="w-48 flex justify-between block px-8 dotted">
              <span className="w-4 h-4 bg-secondary-8 rotate-45 block"></span>
              <span className="w-4 h-4 bg-secondary-8 rotate-45 block"></span>
              <span className="w-4 h-4 bg-secondary-8 rotate-45 block"></span>
            </span>
          </div>
          {/* Admin Dashboard */}
          <section className="w-full min-h-screen py-8 pb-24 flex justify-center relative">
            <div className="w-full max-w-7xl">
              <h2 className="w-full text-center text-5xl pt-8 leading-[60px] pb-16">
                Admin Dashboard
              </h2>
              <div className="w-full flex justify-center">
                <img
                  className="w-full max-w-5xl z-30 relative"
                  src="/projects/purplepatch/admin-dashboard.png"
                />
                <img
                  className="w-full max-w-4xl absolute z-10 left-0"
                  src="/projects/purplepatch/circle-dots.png"
                />
                <img
                  className="w-full max-w-xl absolute z-10 right-0 top-96"
                  src="/projects/purplepatch/oval-semi.png"
                />
              </div>
              <div className="w-2/4 py-8 text-left">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
              </div>
            </div>
          </section>
          <div className="w-full flex justify-center py-8">
            <span className="w-48 flex justify-between block px-8 dotted">
              <span className="w-4 h-4 bg-secondary-8 rotate-45 block"></span>
              <span className="w-4 h-4 bg-secondary-8 rotate-45 block"></span>
              <span className="w-4 h-4 bg-secondary-8 rotate-45 block"></span>
            </span>
          </div>
          {/* Student Dashboard */}
          <section className="w-full min-h-screen flex justify-center relative">
            <div className="w-full max-w-7xl pt-[500px]">
              <h2 className="text-5xl pb-8 text-center absolute top-0 right-1/4">
                Student Dashboard
              </h2>
              <div className="w-full">
                <img
                  className="w-full max-w-7xl absolute -left-16 -top-44 z-50"
                  src="/projects/purplepatch/student-dashboard.png"
                />
                <img
                  className="w-80 absolute left-1/2 top-20"
                  src="/projects/purplepatch/shape-circle-two.png"
                />
                <img
                  className="w-56 max-w-7xl absolute left-8 -bottom-48"
                  src="/projects/purplepatch/piece.png"
                />
              </div>
              <div className="w-full flex justify-end">
                <div className="w-1/3">
                  <ul className="mb-4 leading-[36px]">
                    <li>There are many variations of passagess.</li>
                    <li>There are many variations of passagess.</li>
                    <li>There are many variations of passagess.</li>
                    <li>There are many variations of passagess.</li>
                    <li>There are many variations of passagess.</li>
                    <li>There are many variations of passagess.</li>
                  </ul>
                  <p className="-ml-32">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="w-full flex justify-center py-8">
            <span className="w-48 flex justify-between block px-8 dotted">
              <span className="w-4 h-4 bg-secondary-8 rotate-45 block"></span>
              <span className="w-4 h-4 bg-secondary-8 rotate-45 block"></span>
              <span className="w-4 h-4 bg-secondary-8 rotate-45 block"></span>
            </span>
          </div>
          {/* Admin Reports */}
          <section className="w-full min-h-screen flex justify-center items-center ">
            <div className="w-full max-w-7xl py-36 ">
              <h2>Admin Reports</h2>
              <div className="w-full relative">
                <img
                  className="w-full max-w-7xl relative z-50"
                  src="/projects/purplepatch/admin-reports.png"
                />
                <img
                  className="w-full max-w-2xl absolute bottom-0 -left-96"
                  src="/projects/purplepatch/piece-two.png"
                />
                <img
                  className="w-full max-w-2xl absolute -right-96 -top-48"
                  src="/projects/purplepatch/piece-three.png"
                />
                <img
                  className="w-full max-w-lg absolute top-0 left-2/4 z-20"
                  src="/projects/purplepatch/circle-dots.png"
                />
              </div>
              <div className="w-full pb-36">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
PurplePatch.getLayout = Layout;
