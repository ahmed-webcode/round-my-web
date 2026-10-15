import logoAsset from "@/assets/ahmed-logo.png.asset.json";
import introAsset from "@/assets/logo-intro.webm.asset.json";
import introMp4Asset from "@/assets/logo-intro.mp4.asset.json";

// The asset-serving path is hosted by Lovable, not by external deployments.
const assetOrigin = "https://ahmedms.lovable.app";
export const brandingLogoUrl = new URL(logoAsset.url, assetOrigin).href;
export const brandingIntroUrl = new URL(introAsset.url, assetOrigin).href;
export const brandingIntroPath = introAsset.url;
export const brandingIntroMp4Url = new URL(introMp4Asset.url, assetOrigin).href;
export const brandingIntroMp4Path = introMp4Asset.url;