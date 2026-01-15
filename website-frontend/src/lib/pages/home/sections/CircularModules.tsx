"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import CenterTitle from "@/lib/components/Common/CenterTitle";

const modules = [
  {
    id: "Performance",
    label: "Performance",
    color: "#3b82f6",
    content:
      "Analyze historical consignment trends to identify bottlenecks in your distribution network.",
  },
  {
    id: "DIFOT",
    label: "DIFOT",
    color: "#f59e0b",
    content:
      "Real-time Delivery In Full, On Time tracking across all active lanes.",
  },
  {
    id: "Compliance",
    label: "Compliance",
    color: "#10b981",
    content:
      "Monitor carrier safety ratings and insurance validity to mitigate transit-related liabilities.",
  },
  {
    id: "Consignments",
    label: "Consignments",
    color: "#ef4444",
    content:
      "Unified visibility of all outbound shipments from manifest creation to final mile delivery.",
  },
  {
    id: "KPI",
    label: "KPI",
    color: "#8b5cf6",
    content:
      "Track key indicators including Cost per Mile, Average Transit Time, and Damage Claim rates.",
  },
  {
    id: "Efficiency",
    label: "Efficiency",
    color: "#ec4899",
    content:
      "Optimize load factors and route planning to reduce carbon footprint and operational overhead.",
  },
];

export default function CircularModules() {
  const [activeId, setActiveId] = useState(modules[0].id);

  const outerRadius = 65;
  const innerRadius = 30;
  const centerX = 100;
  const centerY = 100;
  const sliceAngle = 360 / modules.length;

  const activeModule = modules.find((m) => m.id === activeId) || modules[0];

  return (
    <SectionContainer className="flex flex-col items-center justify-center">
          <CenterTitle
            title={"GoldTiger Reporting System"}
            description={"Comprehensive logistics analytics at your fingertips."}
            buttonVariant={"default"}
            className="!mt-0 "
            link={"/news"}
            onButtonClick={() => {}}
          />

      <div className="flex w-full max-w-7xl items-center justify-center gap-16">
        {/* LEFT SIDE: ENHANCED TIRE */}
        <div className="flex w-1/2 items-center justify-center">
          <div className="aspect-square h-[420px] w-[420px] relative">
            <svg
              viewBox="0 0 200 200"
              className="h-full w-full overflow-visible filter drop-shadow-2xl"
            >
              <defs>
                {/* Tire Body Gradient */}
                <radialGradient id="tireGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2d3748" />
                  <stop offset="50%" stopColor="#1a202c" />
                  <stop offset="100%" stopColor="#0f1419" />
                </radialGradient>

                {/* Rim Gradient */}
                <radialGradient id="rimGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#e5e7eb" />
                  <stop offset="40%" stopColor="#d1d5db" />
                  <stop offset="70%" stopColor="#9ca3af" />
                  <stop offset="100%" stopColor="#6b7280" />
                </radialGradient>

                {/* Inner Hub Gradient */}
                <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4b5563" />
                  <stop offset="100%" stopColor="#1f2937" />
                </radialGradient>

                {/* Glow effect for active module */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* OUTER TIRE SHADOW */}
              <circle
                cx="100"
                cy="103"
                r="86"
                fill="rgba(0,0,0,0.15)"
                filter="blur(8px)"
              />

              {/* OUTER TREAD PATTERN - Enhanced */}
              {Array.from({ length: 48 }).map((_, i) => {
                const angle = i * 7.5;
                const isLongBlock = i % 3 === 0;
                return (
                  <g key={i} transform={`rotate(${angle}, 100, 100)`}>
                    <rect
                      x="97"
                      y="10"
                      width="6"
                      height={isLongBlock ? "10" : "7"}
                      fill="#0f1419"
                      rx="2"
                    />
                    <rect
                      x="98"
                      y="11"
                      width="4"
                      height={isLongBlock ? "8" : "5"}
                      fill="#1a202c"
                      rx="1"
                    />
                  </g>
                );
              })}

              {/* MAIN TIRE BODY */}
              <circle
                cx="100"
                cy="100"
                r="83"
                fill="url(#tireGradient)"
                stroke="#0a0d11"
                strokeWidth="2"
              />

              {/* TIRE SIDEWALL DETAILS */}
              <circle
                cx="100"
                cy="100"
                r="78"
                fill="none"
                stroke="#374151"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <circle
                cx="100"
                cy="100"
                r="72"
                fill="none"
                stroke="#374151"
                strokeWidth="0.5"
                opacity="0.3"
              />

              {/* INTERACTIVE MODULE SECTIONS */}
              {modules.map((module, i) => {
                const startAngle = i * sliceAngle;
                const endAngle = (i + 1) * sliceAngle;
                const midAngleRad =
                  (Math.PI * (startAngle + sliceAngle / 2 - 90)) / 180;

                const moveX = Math.cos(midAngleRad) * 6;
                const moveY = Math.sin(midAngleRad) * 6;

                const x1_o =
                  centerX +
                  outerRadius * Math.cos((Math.PI * (startAngle - 90)) / 180);
                const y1_o =
                  centerY +
                  outerRadius * Math.sin((Math.PI * (startAngle - 90)) / 180);
                const x2_o =
                  centerX +
                  outerRadius * Math.cos((Math.PI * (endAngle - 90)) / 180);
                const y2_o =
                  centerY +
                  outerRadius * Math.sin((Math.PI * (endAngle - 90)) / 180);
                const x1_i =
                  centerX +
                  innerRadius * Math.cos((Math.PI * (startAngle - 90)) / 180);
                const y1_i =
                  centerY +
                  innerRadius * Math.sin((Math.PI * (startAngle - 90)) / 180);
                const x2_i =
                  centerX +
                  innerRadius * Math.cos((Math.PI * (endAngle - 90)) / 180);
                const y2_i =
                  centerY +
                  innerRadius * Math.sin((Math.PI * (endAngle - 90)) / 180);

                const pathData = `M ${x1_i} ${y1_i} L ${x1_o} ${y1_o} A ${outerRadius} ${outerRadius} 0 0 1 ${x2_o} ${y2_o} L ${x2_i} ${y2_i} A ${innerRadius} ${innerRadius} 0 0 0 ${x1_i} ${y1_i} Z`;

                const isActive = activeId === module.id;

                return (
                  <g
                    key={module.id}
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveId(module.id)}
                  >
                    <motion.path
                      d={pathData}
                      fill={isActive ? module.color : "#6b7280"}
                      stroke="#1f2937"
                      strokeWidth="1.5"
                      filter={isActive ? "url(#glow)" : undefined}
                      animate={{
                        x: isActive ? moveX : 0,
                        y: isActive ? moveY : 0,
                        opacity: isActive ? 1 : 0.7,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />

                    {/* Module Labels */}
                    <motion.g
                      animate={{
                        x: isActive ? moveX * 2 : 0,
                        y: isActive ? moveY * 2 : 0,
                      }}
                    >
                      <text
                        x={centerX + (outerRadius + 38) * Math.cos(midAngleRad)}
                        y={centerY + (outerRadius + 38) * Math.sin(midAngleRad)}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        className={`text-[6px] font-bold tracking-wider uppercase transition-all duration-300 ${
                          isActive ? "fill-gray-900" : "fill-gray-500"
                        }`}
                        style={{ fontFamily: "system-ui" }}
                      >
                        {module.label}
                      </text>
                    </motion.g>
                  </g>
                );
              })}

              {/* METALLIC RIM */}
              <circle
                cx="100"
                cy="100"
                r={innerRadius + 2}
                fill="url(#rimGradient)"
                stroke="#9ca3af"
                strokeWidth="1"
              />

              {/* RIM SPOKES - 5-spoke design */}
              <g>
                {[0, 72, 144, 216, 288].map((angle) => (
                  <g key={angle}>
                    {/* Spoke */}
                    <path
                      d={`M 100 100 L ${
                        100 + (innerRadius - 2) * Math.cos((angle * Math.PI) / 180)
                      } ${
                        100 + (innerRadius - 2) * Math.sin((angle * Math.PI) / 180)
                      }`}
                      stroke="#9ca3af"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Lug nut */}
                    <circle
                      cx={
                        100 +
                        (innerRadius - 8) * Math.cos((angle * Math.PI) / 180)
                      }
                      cy={
                        100 +
                        (innerRadius - 8) * Math.sin((angle * Math.PI) / 180)
                      }
                      r="2.5"
                      fill="#4b5563"
                      stroke="#1f2937"
                      strokeWidth="0.5"
                    />
                  </g>
                ))}

                {/* Center Hub Cap */}
                <circle cx="100" cy="100" r="12" fill="url(#hubGradient)" />
                <circle
                  cx="100"
                  cy="100"
                  r="10"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="0.5"
                />
                
                {/* Center Active Indicator */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="4"
                  animate={{ fill: activeModule.color }}
                  className="filter drop-shadow-lg"
                  transition={{ duration: 0.3 }}
                />
                <motion.circle
                  cx="100"
                  cy="100"
                  r="6"
                  fill="none"
                  stroke={activeModule.color}
                  strokeWidth="0.5"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </g>
            </svg>
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT PANEL */}
        <div className="w-1/2 pl-12 flex flex-col justify-center h-[400px]">
          <div className="flex flex-col items-start max-w-lg">
            {/* Color Indicator */}
            <motion.div
              className="h-1.5 rounded-full mb-8"
              animate={{
                backgroundColor: activeModule.color,
                width: ["3rem", "5rem", "3rem"],
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-4"
              >
                <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">
                  {activeModule.label}
                </h2>

                <p className="text-base text-gray-600 leading-relaxed">
                  {activeModule.content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}