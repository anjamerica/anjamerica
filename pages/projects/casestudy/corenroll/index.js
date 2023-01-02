import React from "react";
import Footer from "../../../../components/landin/Footer";
import Layout from "../../../../components/layout/Layout";

export default function Corenroll() {
  return (
    <>
      <div className="w-full ">
        <div className="w-full">
          <section className="w-full min-h-screen pf_corenroll relative bottombluestrip flex justify-center">
            <div className="w-full max-w-7xl py-16 flex relative z-30">
              <div className="w-1/3 flex">
                <div className="dotstrip">
                  <img className="w-full" src="/projects/corenroll/dots.png" />
                </div>
                <div className="caption pl-16 pt-20">
                  <img
                    className="w-full max-w-xs"
                    src="/projects/corenroll/corenroll.png"
                  />
                  <p className="max-w-xs leading-[32px] pt-4">
                    Lorem Ipsum
                    <br /> is simply dummy text
                    <br />
                    <span className="font-semibold text-2xl">
                      of the printing and typesetting industry.
                    </span>
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className="w-2/3 pt-32">
                <img className="w-full" src="/projects/corenroll/banner.png" />
              </div>
            </div>
          </section>
          {/* Challenges */}
          <section className="w-full min-h-screen py-24">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-7xl flex">
                <div className="w-1/2">
                  <img
                    className="w-full"
                    src="/projects/corenroll/challenges.png"
                  />
                </div>
                <div className="w-1/2 pl-16">
                  <ul>
                    <li className="pl-16 relative">
                      <span className="flex items-center">
                        <span className="w-12 h-12 rounded-full border-4 border-solid border-secondary-11 block flex justify-center items-center text-xl absolute left-0">
                          1
                        </span>
                        <h2 className="text-3xl font-opensans leading-[60px] block">
                          Client Goal
                        </h2>
                      </span>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
                      </p>
                    </li>
                    <li className="pl-16 relative">
                      <span className="flex items-center">
                        <span className="w-12 h-12 rounded-full border-4 border-solid border-secondary-11 block flex justify-center items-center text-xl absolute left-0">
                          2
                        </span>
                        <h2 className="text-3xl font-opensans leading-[60px] block">
                          Client Goal
                        </h2>
                      </span>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-7xl">
                <ul>
                  <li className="pl-16 relative">
                    <span className="flex items-center">
                      <span className="w-12 h-12 rounded-full border-4 border-solid border-secondary-11 block flex justify-center items-center text-xl absolute left-0">
                        3
                      </span>
                      <h2 className="text-3xl font-opensans leading-[60px] block">
                        Client Goal
                      </h2>
                    </span>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* Project Breif */}
          <section className="w-full min-h-screen flex justify-center">
            <div className="w-full max-w-7xl flex flex-col justify-center">
              <h2 className="text-2xl text-center pb-4">Project Breif</h2>
              <p className="text-center leading-[30px]">
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
              <div className="w-full flex justify-center py-20">
                <div className="w-[670px] h-[670px] max-w-2xl border-2 border-dashed border-secondary-11 rounded-full flex justify-center items-center relative bg-secondary-12">
                  <div className="w-[300px] h-[300px] max-w-xs border-2 border-dashed border-secondary-11 rounded-full flex justify-center items-center">
                    <div className="w-[260px] h-[260px] rounded-full bg-secondary-11 flex justify-center items-center">
                      <img
                        className="w-[400px]"
                        src="/projects/corenroll/logo-black.png"
                      />
                    </div>
                  </div>
                  <div className="w-full max-w-xs p-4 border border-dashed border-secondary-11 rounded-2xl bg-secondary-12 text-center absolute -left-40 -top-12">
                    <h3 className="text-xl">Heading</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="w-full max-w-xs p-4 border border-dashed border-secondary-11 rounded-2xl bg-secondary-12 text-center absolute -right-40 -top-12">
                    <h3 className="text-xl">Heading</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="w-full max-w-xs p-4 border border-dashed border-secondary-11 rounded-2xl bg-secondary-12 text-center absolute -left-60 top-1/2 commontransform">
                    <h3 className="text-xl">Heading</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="w-full max-w-xs p-4 border border-dashed border-secondary-11 rounded-2xl bg-secondary-12 text-center absolute -right-60 top-1/2 commontransform">
                    <h3 className="text-xl">Heading</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="w-full max-w-xs p-4 border border-dashed border-secondary-11 rounded-2xl bg-secondary-12 text-center absolute -left-48 -bottom-12">
                    <h3 className="text-xl">Heading</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="w-full max-w-xs p-4 border border-dashed border-secondary-11 rounded-2xl bg-secondary-12 text-center absolute -right-48 -bottom-12">
                    <h3 className="text-xl">Heading</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="w-full max-w-xs p-4 border border-dashed border-secondary-11 rounded-2xl bg-secondary-12 text-center absolute left-1/2 commonxtransform -bottom-12">
                    <h3 className="text-xl">Heading</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Entrolment */}
          <section className="w-full min-h-screen flex justify-center bg-secondary-11">
            <div className="w-full max-w-7xl py-24">
              <h2 className="w-full text-white text-center text-3xl">
                Entrolment
              </h2>
              <div className="w-full flex justify-center">
                <div className="w-full max-w-4xl relative">
                  <img
                    className="w-full"
                    src="/projects/corenroll/entrolment.png"
                  />
                  <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-shade absolute top-32 -right-1/4">
                    <h2 className="pb-2 text-2xl text-textcolor-4">
                      Project Breif
                    </h2>
                    <p className="leading-8">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Invoicing */}
          <section className="w-full min-h-screen flex justify-center">
            <div className="w-full max-w-7xl py-16">
              <h2 className="text-2xl text-center pb-2">Invoicing</h2>
              <div className="w-full relative">
                <img
                  className="w-full"
                  src="/projects/corenroll/invoicing.png"
                />
                <p className="text-textcolor-4 absolute w-full block max-w-[250px] text-center -left-16 top-8">
                  There are many variations of passages
                </p>
                <p className="text-textcolor-4 absolute w-full block max-w-[250px] text-center -left-16 top-72">
                  There are many variations of passages
                </p>
                <p className="text-textcolor-4 absolute w-full block max-w-[250px] text-center -left-28 bottom-52">
                  There are many variations of passages
                </p>
                <p className="text-textcolor-4 absolute w-full block max-w-[250px] text-center -right-28 top-8">
                  There are many variations of passages
                </p>
                <p className="text-textcolor-4 absolute w-full block max-w-[250px] text-center -right-28 top-52">
                  There are many variations of passages
                </p>
                <p className="text-textcolor-4 absolute w-full block max-w-[150px] text-center -right-32 bottom-80">
                  There are many variations of passages
                </p>
                <p className="text-textcolor-4 absolute w-full block max-w-[250px] text-center -right-28 bottom-44">
                  There are many variations of passages
                </p>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full max-w-7xl">
                  <p className="text-center leading-[32px]">
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
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Billing Dashboard */}
          <section className="crbilling">
            <div className="w-full min-h-screen bg-secondary-13 bg-opacity-90 flex justify-center">
              <div className="w-full max-w-7xl py-24">
                <h2 className="w-full text-white text-center text-3xl pb-12">
                  Billing Dashboards
                </h2>
                <div className="w-full relative">
                  <img
                    className="w-full"
                    src="/projects/corenroll/billing-dashboard.png"
                  />
                  <p className="text-white absolute w-full block max-w-[250px] text-center -left-28 top-16">
                    There are many variations of passages
                  </p>
                  <p className="text-white absolute w-full block max-w-[250px] text-center -left-28 top-80">
                    There are many variations of passages
                  </p>
                  <p className="text-white absolute w-full block max-w-[250px] text-center -left-28 bottom-24">
                    There are many variations of passages
                  </p>
                  <p className="text-white absolute w-full block max-w-[250px] text-center -right-28 top-16">
                    There are many variations of passages
                  </p>
                  <p className="text-white absolute w-full block max-w-[250px] text-center -right-28 top-64">
                    There are many variations of passages
                  </p>
                  <p className="text-white absolute w-full block max-w-[250px] text-center -right-28 bottom-60">
                    There are many variations of passages
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Plans */}
          <section className="crplan flex justify-center">
            <div className="w-full max-w-7xl py-24">
              <h2 className="w-full text-center text-3xl pb-8">Plans</h2>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full max-w-6xl pb-4">
                  <img className="w-full" src="/projects/corenroll/plan.png" />
                </div>
                <p className="text-center">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.{" "}
                </p>
              </div>
            </div>
          </section>
          {/* Agent Management */}
          <section className="w-full min-h-screen">
            <div className="w-full min-h-screen bg-secondary-11 flex justify-center">
              <div className="w-full max-w-7xl py-24">
                <h2 className="w-full text-white text-center text-3xl pb-12">
                  Agent Management
                </h2>
                <div className="w-full relative">
                  <img
                    className="w-full"
                    src="/projects/corenroll/agent-managment.png"
                  />
                  <div className="absolute w-full block max-w-[260px] text-center -left-28 top-20 shadow-shade bg-white rounded-xl p-6">
                    <h3 className="text-textcolor-4 text-lg text-left pb-2">
                      Project Breif
                    </h3>
                    <p className="text-left">
                      There are many variations of passages
                    </p>
                  </div>
                  <div className="absolute w-full block max-w-[260px] text-center -left-28 top-80 shadow-shade bg-white rounded-xl p-6">
                    <h3 className="text-textcolor-4 text-lg text-left pb-2">
                      Project Breif
                    </h3>
                    <p className="text-left">
                      There are many variations of passages
                    </p>
                  </div>
                  <div className="absolute w-full block max-w-[260px] text-center -left-36 -bottom-10 shadow-shade bg-white rounded-xl p-6">
                    <h3 className="text-textcolor-4 text-lg text-left pb-2">
                      Project Breif
                    </h3>
                    <p className="text-left">
                      There are many variations of passages
                    </p>
                  </div>
                  <div className="absolute w-full block max-w-[260px] text-center -right-28 -top-14 shadow-shade bg-white rounded-xl p-6">
                    <h3 className="text-textcolor-4 text-lg text-left pb-2">
                      Project Breif
                    </h3>
                    <p className="text-left">
                      There are many variations of passages
                    </p>
                  </div>
                  <div className="absolute w-full block max-w-[260px] text-center -right-28 top-96 shadow-shade bg-white rounded-xl p-6">
                    <h3 className="text-textcolor-4 text-lg text-left pb-2">
                      Project Breif
                    </h3>
                    <p className="text-left">
                      There are many variations of passages
                    </p>
                  </div>
                  <div className="absolute w-full block max-w-[260px] text-center right-44 -bottom-10 shadow-shade bg-white rounded-xl p-6">
                    <h3 className="text-textcolor-4 text-lg text-left pb-2">
                      Project Breif
                    </h3>
                    <p className="text-left">
                      There are many variations of passages
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Mobile App Development */}
          <section className="w-full min-h-screen bg-secondary-12">
            <div className="crlinecurves flex justify-center">
              <div className="w-full max-w-7xl py-24">
                <h2 className="text-3xl w-full text-center pb-16">
                  Mobile App Development
                </h2>
                <div className="w-full">
                  <ul className="w-full flex">
                    <li className="px-2">
                      <img
                        className="w-full"
                        src="/projects/corenroll/m-login.png"
                      />
                    </li>
                    <li className="px-2">
                      <img
                        className="w-full"
                        src="/projects/corenroll/m-personal-info.png"
                      />
                    </li>
                    <li className="px-2">
                      <img
                        className="w-full"
                        src="/projects/corenroll/m-calendar.png"
                      />
                    </li>
                    <li className="px-2">
                      <img
                        className="w-full"
                        src="/projects/corenroll/m-upload-photo.png"
                      />
                    </li>
                    <li className="px-2">
                      <img
                        className="w-full"
                        src="/projects/corenroll/employers_group.png"
                      />
                    </li>
                  </ul>
                </div>
                <p className="text-center leading-[30px] pt-8">
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
        </div>

        <Footer />
      </div>
    </>
  );
}
Corenroll.getLayout = Layout;
