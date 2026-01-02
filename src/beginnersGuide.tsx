import { createProgressComponent, getSidebarParts } from "./sidebarProgress";

const BEGINNERS_GUIDE_PARTS = getSidebarParts("Beginner's Guide");

export default createProgressComponent(BEGINNERS_GUIDE_PARTS, "beginner");
