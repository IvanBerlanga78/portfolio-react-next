"use client";

import { Suspense } from "react";
import { LoaderIntro } from "../src/assets/components/Animations"

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
    <Suspense>
      <LoaderIntro />
    </Suspense> 
    )

  }