import {
  AveDex,
  CoinGecko,
  CoinMarketCap,
  DEXView,
  PinkSale,
  Revolution,
} from "../../../../assets/images";
import { PartnerCardProps } from "./Partners.styles";

type PartnersCardType = {
  src: string;
} & PartnerCardProps;

export const PARTNERS_LIST: PartnersCardType[] = [
  {
    right: "28%",
    top: "-13%",
    src: PinkSale,
  },
  {
    left: "-18%",
    top: "20%",
    src: AveDex,
  },
  {
    right: "-18%",
    top: "20%",
    src: DEXView,
  },
  {
    left: "-18%",
    bottom: "20%",
    src: Revolution,
  },
  {
    right: "-18%",
    bottom: "20%",
    src: CoinGecko,
  },
  {
    right: "28%",
    bottom: "-10%",
    src: CoinMarketCap,
  },
];
