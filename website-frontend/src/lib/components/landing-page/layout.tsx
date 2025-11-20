"use client";
import React from "react";
import { BACKEND_URL, GTAM_URL, get_user_info } from "@/lib/services/api";
import Logo from "../../../../public/Logos/logo-transparent.svg";
import tiger from "../../../../public/svgs/tiger.svg";
import { User, AllowedApp } from "@/lib/types/auth/auth";
import { MessageCircleMore, LogOutIcon } from "lucide-react";
import Image from "next/image";
import { getCookie } from "@/lib/api/axios";
import AnimatedLoading from "../Loader/AnimatedLoading";
import { ChevronsRight } from "lucide-react";
import goldMap from "../../../../public/webp/goldmap.webp";

export default function Layout() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState<User | null>(null);
  const [Token, setToken] = React.useState(null);
  const [apps, setApps] = React.useState<AllowedApp[]>([]);
  const [filteredApps, setFilteredApps] = React.useState<AllowedApp[]>([]);
  const [greeting, setGreeting] = React.useState("");
  const [imgFetchingErrors, setImgFetchingErrors] = React.useState<{
    [key: number]: boolean;
  }>({});

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
    get_user_info(getCookie("jwt_token") || "")
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
      {!isLoading && user && Token ? (
        <div className="w-full h-full ">
          <div className="flex flex-row w-full h-full">
            <div className="flex flex-col relative w-full h-full overflow-hidden">
              <Image src={goldMap} className="absolute right-0 -bottom-12 w-[38vw] " alt="" />
              {/* navbar */}
              <div className="relative border-b-2 border-gold flex lg:flex-row flex-row justify-between lg:items-center sm:px-8 w-full h-30 text-white md:text-3xl py-4 mx-auto max-w-7xl ">
                <p className="flex w-full md:mt-0">
                  <a href="/">
                    <Image src={Logo} className="h-14" alt="Image" />
                  </a>
                </p>

                <div className="w-full right-5 top-3 lg:relative lg:right-0 lg:top-0 flex justify-center gap-x-6 sm:gap-x-10 items-center">
                  <div className="flex flex-row items-center gap-x-2 w-full">
                    <div
                      className={`text-smooth text-sm rounded-full border-2 border-gold bg-creamy text-warm-brown font-bold flex justify-center items-center w-10  h-10`}
                    >
                      <>
                        {user.FirstName && user.LastName ? (
                          <>
                            <p>
                              {user.FirstName.substring(0, 1).toUpperCase()}
                            </p>
                          </>
                        ) : (
                          <>
                            <p>{user.Username.substring(0, 1).toUpperCase()}</p>
                          </>
                        )}
                      </>
                    </div>
                    <p className="text-sm text-warm-brown w-71 hidden sm:block">
                      {user.FirstName && user.LastName ? (
                        <>
                          {user.FirstName} {user.LastName}
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
                        "text-warm-brown hover:text-gold hover:cursor-pointer group w-auto p-3 rounded-md flex flex-row items-center text-xs font-medium"
                      }
                    >
                      <MessageCircleMore
                        className={
                          "text-warm-brown group-hover:text-gold h-6 w-6"
                        }
                        aria-hidden="true"
                      />

                      <span className="hidden sm:block ml-2">Support</span>
                    </button>
                  </a>

                  <button
                    onClick={() =>
                      (window.location.href = `${process.env.NEXT_PUBLIC_APP_APP_URL}/logout`)
                    }
                    className="hover:cursor-pointer flex flex-row items-center p-2 text-warm-brown border border-creamy hover:border-gold rounded-3xl hover:text-gold"
                  >
                    <LogOutIcon className="w-7 ml-2" />
                    <span className="text-xs ml-2 hidden sm:block">LOGOUT</span>
                  </button>
                </div>
              </div>
              {/* border */}

              <div className="flex flex-col w-full mx-auto max-w-7xl px-6 py-4 lg:px-8">
                <div className="md:text-3xl  py-4 my-4 text-warm-brown">
                  {" "}
                  <span>{greeting}</span>
                  <span>
                    <span>, </span>
                    {user.FirstName && user.LastName ? (
                      <>
                        {user.FirstName} {user.LastName}
                      </>
                    ) : (
                      <>{user.Username}</>
                    )}
                  </span>
                </div>

                <h1 className="flex items-center gap-x-4 text-4xl text-warm-brown font-bold">
                  Gold Tiger Group of Companies: Spearheading The Future
                  <div className="flex items-center space-x-1">
                    <ChevronsRight className="w-[24px] h-[24px] animate-slide-ping" />
                    <ChevronsRight className="w-[26px] h-[26px] animate-slide-ping delay-150" />
                    <ChevronsRight className="w-[28px] h-[28px] animate-slide-ping delay-300" />
                  </div>
                </h1>
                <div className="w-full my-3"></div>
                <p className="text-2xl font-bold text-warm-brown/80">
                  GTLS Software Development Department
                </p>
                <p className="text-md">
                  Enhancing Your Software Experience, Continuously.
                </p>
              </div>

              {/* main content */}
              <div className="flex flex-col w-full mx-auto max-w-7xl px-6 py-4 pb-10 lg:px-8">
                <p className="text-light-gold/50 text-3xl pb-10 font-bold ">
                  Discover our Applications:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8 pb-8">
                  {filteredApps?.length > 0
                    ? filteredApps?.map((app) => (
                        <div
                          id={app.AppName}
                          className={`relative sm:w-auto border border-gold bg-creamy transition hover:scale-105 rounded-3xl shadow-md shadow-gold p-5 h-[18rem] hover:cursor-pointer  hover:shadow-lg hover:shadow-gold overflow-hidden`}
                          onClick={() => {
                            GoAppPage(app);
                          }}
                        >
                          <Image
                            className="opacity-80 absolute -bottom-[66px] left-0"
                            width={200}
                            height={400}
                            src={tiger}
                            alt="tiger"
                          />
                          <div className="z-10 flex flex-row gap-x-6 items-center w-full">
                            <div className={` rounded-3xl w-auto`}>
                              {imgFetchingErrors[app.AppId] ? (
                                <div className="rounded-full text-white bg-gold border-2 border-warm-brown flex items-center justify-center h-14 w-14">
                                  {app.AppAbv.substring(
                                    2,
                                    app.AppAbv.length
                                  ).toUpperCase()}
                                </div>
                              ) : (
                                <img
                                  src={`${process.env.NEXT_PUBLIC_APP_GTAM_APP_URL}/AppLogo/${app?.AppIcon}`}
                                  alt=""
                                  className="h-14 w-14"
                                  onError={() =>
                                    setImgFetchingErrors({
                                      ...imgFetchingErrors,
                                      [app.AppId]: true,
                                    })
                                  }
                                />
                              )}
                            </div>
                            <div className="flex flex-col gap-y-1">
                              <div className="flex gap-x-3">
                                <h1 className="font-bold text-2xl text-warm-brown">
                                  <span>
                                    {app.AppAbv.substring(0, 1).toUpperCase()}
                                  </span>
                                  <span className="">
                                    {app.AppAbv.substring(
                                      1,
                                      app.AppAbv.length
                                    ).toUpperCase()}
                                  </span>
                                </h1>{" "}
                              </div>
                            </div>
                          </div>
                          <div className="py-4 text-left">
                            <h1 className="font-bold text-warm-brown">
                              {app.AppName}
                            </h1>
                            <p className="mt-2 text-warm-brown">
                              {app.AppDesc}
                            </p>
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
        <AnimatedLoading />
      )}
    </div>
  );
}
