import logoAsset from "@/assets/ahmed-logo.png.asset.json";
import introAsset from "@/assets/logo-intro.mp4.asset.json";

// The asset-serving path is hosted by Lovable, not by external deployments.
const assetOrigin = "https://ahmedms.lovable.app";
export const brandingLogoUrl = new URL(logoAsset.url, assetOrigin).href;
export const brandingIntroUrl = new URL(introAsset.url, assetOrigin).href;