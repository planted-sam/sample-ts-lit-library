import React from "react";
import { createComponent } from "@lit-labs/react";
import { CustomNavigation } from "../navigation.js";

export const CustomNavigationComponent = createComponent({
    tagName: "custom-navigation",
    elementClass: CustomNavigation,
    react: React
});
