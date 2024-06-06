import ShopIconSvg from "../assets/images/shopIcon.svg";
import BuySvg from "../assets/images/buyAgain.svg";
import ListIconSvg from "../assets/images/listIcon.svg";
export const productStoreSideBarData = [
  {
    id: 1,
    iconSvg: ShopIconSvg,
    title: "Shop",
    route: "/store/:storeId/front",
  },
  {
    id: 2,
    iconSvg: BuySvg,
    title: "Buy it again",
    route: "#",
  },
  {
    id: 3,
    iconSvg: ListIconSvg,
    title: "Lists",
    route: `/store/your-lists/${storeId}`,
  },
];
