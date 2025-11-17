"use client";
import React from "react";
import { BACKEND_URL, GTAM_URL, get_user_info } from "@/lib/services/api";
import Logo from "../../../../public/imgs/logo.png";
import bottomTiger from "../../../../public/svgs/bottomTiger.svg";
import tiger from "../../../../public/svgs/tiger.svg";
import { User, AllowedApp } from "@/lib/types/auth/auth";
import { MessageCircleMore, LogOutIcon } from 'lucide-react';
import Image from 'next/image';

export default function Layout() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState<User | null>(null);
  const [Token, setToken] = React.useState(null);
  const [apps, setApps] = React.useState<AllowedApp[]>([]);
     const [filteredApps, setFilteredApps] = React.useState<AllowedApp[]>([]);
const [greeting, setGreeting] = React.useState("");


  function getGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }

  React.useEffect(() => {
    get_user_info()
      .then((data) => {
        setUser(data?.user || null);
        setToken(data?.token || null);
        setApps(data?.allowed_apps || []);
        setFilteredApps(data?.allowed_apps || []);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const GoAppPage = (app: AllowedApp) => {
    window.open(app.AppURL, "_blank");
  };
  React.useEffect(() => {
    setGreeting(getGreeting());
  }, []);
  return (
    <div className="h-full w-full">
      {apps && user ? (
                <div className="w-full h-full ">
                    <div className="flex flex-row w-full h-full">
                        <div className="flex flex-col relative w-full min-h-screen bg-gradient-to-br from-gray-800 via-dark to-dark overflow-hidden">
                            <Image
                                src={tiger}
                                className="absolute right-0 top-32"
                                alt=""
                            />
                            {/* navbar */}
                            <div className="relative border-b-2 border-goldt flex lg:flex-row flex-row justify-between lg:items-center sm:px-8 w-full h-30 text-white md:text-3xl py-4 mx-auto max-w-7xl ">
                                <p className="flex w-full md:mt-0">
                                    <a href="/">
                                        <Image
                                            src={Logo}
                                            className="h-14"
                                            alt="Image"
                                        />
                                    </a>
                                </p>

                                <div className="w-full right-5 top-3 lg:relative lg:right-0 lg:top-0 flex justify-center gap-x-6 sm:gap-x-10 items-center">
                                    <div className="flex flex-row items-center gap-x-2 w-full">
                                        <div
                                            className={`text-smooth text-sm rounded-full border-2 border-goldt bg-gray-700 flex justify-center items-center w-10  h-10`}
                                        >
                                            <>
                                                {user.FirstName &&
                                                user.LastName ? (
                                                    <>
                                                        <p>
                                                            {user.FirstName.substring(
                                                                0,
                                                                1
                                                            ).toUpperCase()}
                                                        </p>
                                                    </>
                                                ) : (
                                                    <>
                                                        <p>
                                                            {user.Username.substring(
                                                                0,
                                                                1
                                                            ).toUpperCase()}
                                                        </p>
                                                    </>
                                                )}
                                            </>
                                        </div>
                                        <p className="text-sm text-white w-71 hidden sm:block">
                                            {user.FirstName &&
                                            user.LastName ? (
                                                <>
                                                    {user.FirstName}{" "}
                                                    {user.LastName}
                                                </>
                                            ) : (
                                                <>{user.Username}</>
                                            )}
                                        </p>
                                    </div>
                                    <a
                                        href="https://support.gtls.com.au/help/2703577665"
                                        target="_blank"
                                        className="flex justify-center"
                                    >
                                        {" "}
                                        <button
                                            className={
                                                "text-gray-400  hover:text-white group w-auto p-3 rounded-md flex flex-row items-center text-xs font-medium"
                                            }
                                        >
                                            <MessageCircleMore
                                                className={
                                                    "text-gray-400 group-hover:text-goldt h-6 w-6"
                                                }
                                                aria-hidden="true"
                                            />

                                            <span className="hidden sm:block ml-2">
                                                Support
                                            </span>
                                        </button>
                                    </a>

                                    <button
                                        onClick={()=> window.location.href = `${process.env.NEXT_PUBLIC_APP_APP_URL}/logout`}
                                        className="flex flex-row items-center hover:bg-gray-700 hover:text-white"
                                    >
                                        <LogOutIcon className="w-7 ml-2 text-goldt" />
                                        <span className="text-xs text-gray-400 ml-2 hidden sm:block">
                                            LOGOUT
                                        </span>
                                    </button>
                                </div>
                            </div>
                            {/* border */}

                            <div className=" flex flex-col w-full mx-auto max-w-7xl px-6 py-4 lg:px-8">
                                <div className="text-white md:text-3xl  py-4 my-4 ">
                                    {" "}
                                    <span>{greeting}</span>
                                    <span className="text-goldd">
                                        <span className="text-white">, </span>
                                        {user.FirstName &&
                                        user.LastName ? (
                                            <>
                                                {user.FirstName}{" "}
                                                {user.LastName}
                                            </>
                                        ) : (
                                            <>{user.Username}</>
                                        )}
                                    </span>
                                </div>

                                <h1 className="text-4xl text-white font-bold">
                                    {/* Built for Growth the future of{" "} */}
                                    <span className="text-goldd">Gold </span>
                                    Tiger Group of Companies: Spearheading The
                                    Future
                                </h1>
                                <div className="w-4/12 bg-goldt h-[0.005rem] my-3"></div>
                                <p className="text-goldl text-2xl font-bold ">
                                    GTLS Software Development Department
                                </p>
                                <p className="text-white text-md">
                                    Enhancing Your Software Experience,
                                    Continuously.
                                </p>
                            </div>

                            {/* main content */}
                            <div className="flex flex-col w-full mx-auto max-w-7xl px-6 py-4 pb-10 lg:px-8">
                                <p className="text-goldt text-3xl pb-10 font-bold ">
                                    Discover our Applications:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8">
                                    {filteredApps?.length > 0
                                        ? filteredApps?.map((app) => (
                                              <div
                                                  id={app.AppName}
                                                  className={`bg-gradient-to-tr sm:w-auto border border-goldl from-dark via-dark to-[#373B3D] transition hover:scale-105 relative rounded-3xl shadow-md shadow-goldd p-5 h-[18rem] hover:cursor-pointer  hover:shadow-lg hover:shadow-goldd overflow-hidden`}
                                                  onClick={() => {
                                                      GoAppPage(app);
                                                  }}
                                              >
                                                  <div className="flex flex-row gap-x-6 items-end">
                                                      <div
                                                          className={` rounded-3xl w-auto`}
                                                      >
                                                          <img
                                                              src={`${process.env.NEXT_PUBLIC_APP_GTAM_APP_URL}/AppLogo/${app?.AppIcon}`}
                                                              alt=""
                                                              className="h-14 w-14"
                                                          />
                                                      </div>
                                                      <div className="flex flex-col gap-y-1">
                                                          <div className="flex gap-x-3">
                                                              <h1 className="font-bold text-2xl text-white">
                                                                  <span className="text-goldd">
                                                                      {app.AppAbv.substring(
                                                                          0,
                                                                          1
                                                                      ).toUpperCase()}
                                                                  </span>
                                                                  <span className="">
                                                                      {app.AppAbv.substring(
                                                                          1,
                                                                          app
                                                                              .AppAbv
                                                                              .length
                                                                      ).toUpperCase()}
                                                                  </span>
                                                              </h1>{" "}
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="py-4 text-left">
                                                      <h1 className="font-bold text-white">
                                                          {app.AppName}
                                                      </h1>
                                                      <p className="mt-2 text-gray-300">
                                                          {app.AppDesc}
                                                      </p>
                                                  </div>
                                                  <div className="absolute bottom-0 right-0 overflow-hidden flex flex-col justify-end opacity-20">
                                                      <div className="flex justify-end">
                                                          <div className="w-10 h-10 bg-goldl"></div>
                                                          <div className="w-10 h-10 bg-goldt ellipse-right"></div>
                                                      </div>
                                                      <div className="flex">
                                                          <div className="w-10 h-10 bg-goldd ellipse-left"></div>
                                                          <div className="w-10 h-10 bg-goldl halfcircle-left"></div>
                                                          <div className="w-10 h-10 bg-goldd rounded-full"></div>
                                                          <div className="w-10 h-10 bg-goldt"></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          ))
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="min-h-screen md:pl-20 pt-16 h-full flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                        <div
                            className={`h-5 w-5 bg-goldd rounded-full mr-5 animate-bounce`}
                        ></div>
                        <div
                            className={`h-5 w-5 bg-goldd rounded-full mr-5 animate-bounce200`}
                        ></div>
                        <div
                            className={`h-5 w-5 bg-goldd rounded-full animate-bounce400`}
                        ></div>
                    </div>
                </div>
            )}
        </div>
  );
}
