"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "./Instagram.css";

const SectionWrapper = styled(Box)({
  position: "relative",
  width: "100%",
});

const HeaderSection = styled(Box)({
  backgroundColor: "#B38349",
  padding: "30px 0",
  textAlign: "center",
  marginTop: "-5px",
});

const HeaderText = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontFamily: "var(--font-inter)",
  fontSize: "20px",
  fontWeight: 600,
  letterSpacing: "1px",
  textTransform: "uppercase",
  [theme.breakpoints.between(0, 960)]: {
    fontSize: "16px",
    padding: "0 20px",
  },
}));

const GallerySection = styled(Box)({
  padding: "0",
  backgroundColor: "#F9F9F9",
});

const MediaWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  height: "400px",
  backgroundColor: "#000",
  overflow: "hidden",
  cursor: "pointer",
  borderRadius: "0px",
});

const Instagram = () => {
  const instagramPosts = [
    {
      id: "17940277593089392",
      caption:
        "Behind the scenes with our Saturday triple T'S!!! We love how they help each other bring the vision to life when we film! #apstudioau #apstudioaustralia #acting #dramaclasses",
      media_url:
        "https://instagram.fmaa11-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQO6qVJYs3paLRaT4yVCnraoCOAI-CSC4XTX42o5clLo4NwMfH98Ukx28CMw-laSrdHjodgzzb_GJPtP2REtxutxc_FW74UolVKDmcg.mp4?_nc_cat=106&_nc_oc=Admb8qHXVO8wQQ2Cl3FCAvl-wJC86aduKi4MpZjStznegEWM0sLQaZ56OjPDoPV5BtM&_nc_sid=5e9851&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_ohc=xb-HlZD836YQ7kNvwHjZdCZ&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNjAwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTQwMDI1MDg0ODQ0NDg0OCwiYXNzZXRfYWdlX2RheXMiOjAsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjo1MiwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_gid=k46v88cZz91YmNANOFvv0w&edm=ANo9K5cEAAAA&_nc_zt=28&vs=ea5b929f62d0f67b&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9CRDQzMzg2NjZCM0YwMjNFOEM5NkRDQ0I4QTA4QzRBQV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HUGtXa2lJMVgzVTJnelVIQUFGUmNBOGRPc2RlYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm4IbY5qnh_AQVAigCQzMsF0BKUQYk3S8bGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_tpa=Q5bMBQGhBqYwEoyr2ZO0JmiyH7egOzJFQFpeD1asaedJeIpH_-SAesLEXHWiEvY5LDydp5MfIhm-CDu4Zxc&oh=00_AfhcJRerexyRuXRDlKS5fP79d1nau556JFqck0QHOVC62A&oe=6918989F",
      media_type: "VIDEO",
    },
    {
      id: "18090061996921070",
      caption:
        "TUESDAY TOURS!\nHope you enjoyed getting to know a bit more about another of our studio spaces!\n#ComedyReels #apstudioau #apstudioaustralia #tours",
      media_url:
        "https://instagram.fmaa11-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQPTpoI2uQogHRohpDPx4XRwx95RVXlimpV3QMQ8lUW3GHBd5BgQq8ivltW0sn0WPsZQmH6uEZjA1BN8lA5EITYGd6xnc2ZB9JG009Y.mp4?_nc_cat=104&_nc_oc=AdmFeiUXt__tC9AjXYbn6D-OwATdUYNzHMgQvfDusWNAVc2SvKziPDAdi6d9Fie9xC0&_nc_sid=5e9851&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_ohc=S6iCZM6sh8MQ7kNvwEPBefH&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjY5MjYyODQxNDQyNDc2NywiYXNzZXRfYWdlX2RheXMiOjEwLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NTQsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=k46v88cZz91YmNANOFvv0w&edm=ANo9K5cEAAAA&_nc_zt=28&vs=b109964e89b315ee&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8zMTQyMzFDNTZGQjJEQjFDNEQ2RDE1MzNENDAxMTBBRF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQk9lU3lJSzZtOFFYZGdDQUtEcmdRVmlxcE45YnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm_pq7gs27yAkVAigCQzMsF0BLJmZmZmZmGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_tpa=Q5bMBQFDSNIsgKcWdS4n76ZVupVLab6O4Hmfso7Zhw9rFhxgbWb6HigGoD0tI-A-vYJGtEIUZaTt47EkLj0&oh=00_AfjAs4lMjkKstno1p2RW0gS5xWUwLMMOJXUgPFPgCrpCIg&oe=6918BC81",
      media_type: "VIDEO",
    },
    {
      id: "18089255671917757",
      caption:
        "🎬THATS A WRAP on Halloween celebrations at the studio!!! 🎃👻#apstudioaustralia #apstudioau #acting #dramaclasses",
      media_url:
        "https://instagram.fmaa11-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQNiELhN2c3XdwCwLTFkcf-vaH3eWvtZpXv_nu7Cjqr9GbfZrpVF_uQdGhtDEm4rwgQJpnh4jeBmXNU-Lg5Kh1-ZRfPc8JDXrqn6q4U.mp4?_nc_cat=103&_nc_oc=Admiy9_On2Vb7dKkkyKjHQWSB21RE3oGDJwanDJkFmFeZ-Jps7PfjrhO5c7QT2LZwJw&_nc_sid=5e9851&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_ohc=Ca_fkiq6ewEQ7kNvwHBp36s&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjU0NTA2NjQyNjc4NzM0NzYsImFzc2V0X2FnZV9kYXlzIjoxMSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjQxLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_gid=k46v88cZz91YmNANOFvv0w&edm=ANo9K5cEAAAA&_nc_zt=28&vs=44d69dc960f53324&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9DRDREODhEMzExN0MzNUZFOUYzNDYyRURBMkZCQzRBQ192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRkgwTkNKVTlkX1c0aWdGQUNhdGkzeFdBWlJlYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmiPPfr9HPtVoVAigCQzMsF0BE4gxJul41GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_tpa=Q5bMBQE6wKx3Yz8jkq1jTAzg_RG9aGzPJysROv79yC7Us_D8Eg59iCAa9xHfdBALHWn10xU3xODxby21EIY&oh=00_Afiyox8I9gAq42wkeXsMs81KjILxRIn5f3o5iQwTPnvrdQ&oe=6918C60C",
      media_type: "VIDEO",
    },
    {
      id: "18409240234189454",
      caption:
        "Grab a clapper and join the action! 🎬 Behind the scenes at APS! Building confidence both on and off screen.#apstudioau #apstudioaustralia #bts #acting",
      media_url:
        "https://instagram.fmaa11-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQO6re0crCtfiwICYcy2oq_qxl1Ca4qafj7fMXMJwUcRvtBmhQsTBPemxjHzDPSRqtgN1M6JuhKAPTuvF546eqeAEUIkkZTjXqlzW9k.mp4?_nc_cat=103&_nc_oc=AdkkoMJp-zPh96X7oHJGClpHyGwbIuILCbaNwbZ0ZPPjBZY9bENI3MyACoKma65kmPA&_nc_sid=5e9851&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_ohc=7VTyAWB954UQ7kNvwFBElBY&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuMTI3Ni5kYXNoX2Jhc2VsaW5lXzFfdjEiLCJ4cHZfYXNzZXRfaWQiOjExOTU5MDgwMDI0MjU1OTEsImFzc2V0X2FnZV9kYXlzIjoxMywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjIxLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_gid=k46v88cZz91YmNANOFvv0w&edm=ANo9K5cEAAAA&_nc_zt=28&vs=d9289083c325092f&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8zMzREMjE5RDMzNDRCQjE5QkE0MTRDN0I0MTY5NTRCRV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSVBNTlNKSTZHWjZqbGNGQUxkTzAxeTduSzAwYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm7qvZ-oDrnwQVAigCQzMsF0A1szMzMzMzGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_tpa=Q5bMBQHqo1Ndd5fwljpspYOoZw3-iqlcfDcp85dAY0amFh_wWxgfLUw8vfDoImTXS1esAOX8yx2j4cpn_vw&oh=00_AfinnROav1LwwbfU-EwsVB-6QutK22MI1vJLDqOOIAAHqg&oe=6918AD2C",
      media_type: "VIDEO",
    },
    {
      id: "18538151554051473",
      caption:
        "JOIN.THE.CHICKEN.FUN 🐥🎤🎭\nThe Saturday Junior Kids are having a blast learning their songs for the end of year soirée!! #apstudioau #apstudioaustralia #acting #musicaltheatre #dramaclasses",
      media_url:
        "https://instagram.fmaa11-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQNW8wpPThwiG8rTosotd1JqPwWLSjkwThxKTymdWbIIKxeqILE8VmxtnbIylDil7bVdjWdSFR2H8I15345vfiju5tZkZ9MpmDAikU4.mp4?_nc_cat=103&_nc_oc=AdmFR6COhONnQsqtvBiGbgL6JXhmOCWGk-AHWKzCazbx0JEMfnWyTQ3sPa9lcvdSgvs&_nc_sid=5e9851&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_ohc=Qxv52KFe_y8Q7kNvwEZ19MA&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjA4MDE1NjQ5OTA1ODcxNiwiYXNzZXRfYWdlX2RheXMiOjEzLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MTcsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=k46v88cZz91YmNANOFvv0w&edm=ANo9K5cEAAAA&_nc_zt=28&vs=48579d9c8f696349&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9CODQ3ODY4NzBDMjkzRUUwOTNBNENDQ0JDODQxNzU5OV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQi05TmlKdktnYXhES3dHQU1OTkx2cEd4VkJwYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmuICh04X5sQcVAigCQzMsF0Ax90vGp--eGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_tpa=Q5bMBQEnyTcujCIFHgoF0FpiKlyjf1M-Y4RK3f5izj6-OO5UCgBQzV6a6hCLp5dP1wiF_ThiGVSV1rR0Tag&oh=00_Afjs0hzme-i6De0o3gum9FoXZWALb8-yifvyTN5OiHOXYw&oe=69189AC0",
      media_type: "VIDEO",
    },
    {
      id: "17850199506581768",
      caption:
        "👻We hope everyone had a great night! \n\n#apstudioau #apstudioaustralia #thingstodoinmelbourne #halloween",
      media_url:
        "https://instagram.fmaa11-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQMvbN_NIUPyfaxYVsIyZ-Lawcpt4tNbb1PSTH0Hn59pwWGbODUgzsNS3EPk-pp0bc3WiIbqbDAVm9m6jcc4s0Nt8HxJ9aI8alG-2JE.mp4?_nc_cat=108&_nc_oc=Adkp3DOjE5bQuVGGKMaOSHN2eR-xhPqsF2LDJYsI6VZj-coe4tUncnXfubPj9YNqfhc&_nc_sid=5e9851&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_ohc=C6v5XYQWlcoQ7kNvwFrSLwN&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTE2Njk0ODM4NTM3Njk3OSwiYXNzZXRfYWdlX2RheXMiOjEzLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MTIsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=k46v88cZz91YmNANOFvv0w&edm=ANo9K5cEAAAA&_nc_zt=28&vs=aa400716a2812e53&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8yNDRCNDJDQzgxNDcyNDFCQ0RBRTFFN0UxQkJGREVBQV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSlp0S1NMa3lLUkhQdUVEQUtDbXFzMS1mMEZRYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmpqva_6rVkgQVAigCQzMsF0ApzMzMzMzNGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_tpa=Q5bMBQGJjIJE_yQ0V0bUFrkWlDRyUuQJchlPIMcGJn_a10lE9xSknuF-883-MWdzCtNP_KLGpt0vJ6G-U5s&oh=00_Afgfd7ryIy4pibHiIheByBCGz79nrvpPqStLrTo0IfurMg&oe=6918C48D",
      media_type: "VIDEO",
    },
    {
      id: "18112404370577834",
      caption:
        "🎃HAPPY HALLOWEEN!!🎃\nFrom the APS teens - wishing all who celebrate, a Halloween full of thrills, chills, and killer performances. 👻🎬\nStay spooky and keep stealing the scene.\n#HappyHalloween #apstudioau #apstudioaustralia #Halloween #kidsactivitiesmelbourne",
      media_url:
        "https://instagram.fmaa11-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQPruw1zpIQ94VVUJk-7nhTwAJpEoQCWcODxV_LvNy3ub6a49kBePtdM1T-s8gBKNAKNp12tZfFF8SLyV6DKrl7N49IIavRgj8MJIpc.mp4?_nc_cat=105&_nc_oc=AdlG01G2dwojem_GljAjvQC5LRuHW3QwhoMWhHci3E1BTYzeJno42k-Dm6DjZqeDWR0&_nc_sid=5e9851&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_ohc=sM-jZ72gmjwQ7kNvwFvkkZC&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuMTI4MC5kYXNoX2Jhc2VsaW5lXzFfdjEiLCJ4cHZfYXNzZXRfaWQiOjE1MjE1NjU5NDI1MTc2MDEsImFzc2V0X2FnZV9kYXlzIjoxNCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjQzLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_gid=k46v88cZz91YmNANOFvv0w&edm=ANo9K5cEAAAA&_nc_zt=28&vs=356ffa346d67c7bc&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9DNDRENDcxODEzN0QwRURCOTdFN0E3NUZFMTI3NjQ4Q192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HUE9FTHlJLWxLZnd3OWNDQUtWVVJiVWZLMmRmYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmwr2M2OX2swUVAigCQzMsF0BFmZmZmZmaGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_tpa=Q5bMBQHcrolw5qhQyVY7FupmOI7KHc__hpoIszir0a6GBReHP9IVOygdds5zED9NX0Hy29nBqPcsJ5ZJf50&oh=00_AfgEhiUEQl_DaUgXnnAiIq0fkrroXcOOJX5XkixYL_-7Fw&oe=69189A86",
      media_type: "VIDEO",
    },
    {
      id: "17995220375844735",
      caption:
        "🎃 HALLOWEEN IS COMING UP! 🎃\nWe are getting ready for halloween, with yummy treats and halloween themed drama exercises! Happy halloween week to those who celebrate!\n #apstudioaustralia #apstudioau #Halloween #kidsactivitiesmelbourne #drama",
      media_url:
        "https://instagram.fmaa11-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQPbdcFzQORc6T6prtLckO5oo7bMeF1ZUqpYsq0U8ozMFACBndvtdcPqrJ8-bi8JPLMQKbFse-IB6w5MSMXILi8bwie63W1VtnrZi4Y.mp4?_nc_cat=106&_nc_oc=AdmaEdEOuJmHsmiubOM8-pkOWqlrDjKlB_Or2Ise4UnHviJvtDhPK6uS8rkiI71GcZk&_nc_sid=5e9851&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_ohc=OuUCNUECq7kQ7kNvwHRU2x9&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuMTI4MC5kYXNoX2Jhc2VsaW5lXzFfdjEiLCJ4cHZfYXNzZXRfaWQiOjgxMjIxODU0MTcxNzE5NiwiYXNzZXRfYWdlX2RheXMiOjE2LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjYsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=8e16ca4bbf7c2f2d&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9FRDRDMjlGOTA0NjUyRTMwNjk3MjdBM0U0QzFDMzg5Rl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRVVyTFNJSnNQdlZQaUVFQU5HNGluVUFsQ1lUYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmmNvF2qut8QIVAigCQzMsF0A63bItDlYEGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=k46v88cZz91YmNANOFvv0w&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQH9s7YQfvXr2-9nlT8XjCG6bksFQKGhsp5CXTRsWyEcxpUAVZcDDjVPcTMbkgBmAH2e-y-9wTkKszM&oh=00_Afi2D-cfrAcAUzPsbyYesj1YBJr3RIRb9vPC_NyawojBFQ&oe=6918B673",
      media_type: "VIDEO",
    },
    {
      id: "18072519746265292",
      caption:
        "😯 HAVE A LOOK 🎞\nAt some of the fun we have filming with the saturday TTT kids. Not only do they learn skills for performing on camera but they also get a chance to learn some of the behind the scenes! Clever kids!\n#drama #apstudioau #apstudioaustralia #MusicalTheatreKids #selftape #kidsactivitiesmelbourne",
      media_url:
        "https://instagram.fmaa11-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQPvK_L4LjF8mUb2BSX92-4bIceWL1WjSNfeVSlFw3KC3IxvHrrjdiNmup8HlprY_WE2Q17ZAsTZnGJTDzgJHYpXxi5DkLnSLd9UfbA.mp4?_nc_cat=110&_nc_oc=AdmAGCw_ZtckY45AXR27ZmxNqC2_rRLmtib5jzzpOUzqrN0BvW8pUX2OKzuAX0M42is&_nc_sid=5e9851&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_ohc=Ngp3rZpxSDYQ7kNvwHO-TKm&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuMTI4MC5kYXNoX2Jhc2VsaW5lXzFfdjEiLCJ4cHZfYXNzZXRfaWQiOjE0NjA5MjM2NzgzMzA2NTgsImFzc2V0X2FnZV9kYXlzIjoxNywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjU2LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_gid=k46v88cZz91YmNANOFvv0w&edm=ANo9K5cEAAAA&_nc_zt=28&vs=ea2dddbbb77ebff9&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9GNjQ3ODJBQjUwQjA5OEVEOUQ2RkM0OEFFRDA3RDQ5QV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HR0tqX0NGMTRvZzhkZllEQUFPTUVaUm1wMFkwYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmxLygzvmsmAUVAigCQzMsF0BMIgxJul41GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_tpa=Q5bMBQGG2grGriuGPu3uYbe2rsZireXNAYSKCYlpMTfD0VX-GiwqzVNaPKORzcOdxrfGnqVyLRRdFOcO3ck&oh=00_AfjH3E7dGSJm2RlTLMK4w2201fr9n-spAMnXVcuBS-tzww&oe=6918AE6F",
      media_type: "VIDEO",
    },
    {
      id: "18063759197456622",
      caption:
        "🎞TUESDAY TOURS!\nOur kids had a blast telling you about their favourite chill out spot!\n#apstudioau #apstudioaustralia #tours #drama",
      media_url:
        "https://instagram.fmaa11-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQMsu3ChIv7Dt-mfVcwIi40_j-2AixFIl5diocQ0yqFIHifH4yJQIA7nNL3N9zzsbFskAqWI0_FOtf7KoVi7pq8TBOGgfVQiFR0ZjGk.mp4?_nc_cat=102&_nc_oc=AdlCbi1lbU_GOQ_QRzLirGdK6s3SflW0DZTG-nwcKFNkrxytvQBhvFZPbBCFFa_kpKw&_nc_sid=5e9851&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_ohc=lQKk8wgycuQQ7kNvwFopj3A&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6ODg5NTIzMDM2OTM1NTkwLCJhc3NldF9hZ2VfZGF5cyI6MTgsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjo0OSwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=732d77d2b8edcce2&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9FNTQ1REVEOTMwQ0UyMUIxMTcyMkJBMDkzQUVCNzM5Q192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSWlBR1NKZTdQOU5pckFDQVBDUVAxNDVsSjRZYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmzNaWiofBlAMVAigCQzMsF0BIhDlYEGJOGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=k46v88cZz91YmNANOFvv0w&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQGTzhs7ns4WTDlEWgpfJvIL-yY9w0Q6ubQERmNQsvUgGk1fMLDKoMEFuq1YS9l0GxCfXf06CExefmc&oh=00_Afj2QPqCqQHltMzfUjEAKLi4Yzsu7pZPDz1Yg0hlVTBDYg&oe=69189B87",
      media_type: "VIDEO",
    },
  ];

  return (
    <SectionWrapper>
      {/* Header */}
      <HeaderSection>
        <Container maxWidth="xl">
          <HeaderText>
            Click to follow us on social media for all the latest APS updates
          </HeaderText>
        </Container>
      </HeaderSection>

      {/* Instagram Posts Swiper */}
      <GallerySection>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            968: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          className="instagram-swiper"
        >
          {instagramPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <MediaWrapper>
                {post.media_type === "VIDEO" ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <source src={post.media_url} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={post.media_url}
                    alt={post.caption || "Instagram post"}
                    fill
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                )}
              </MediaWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </GallerySection>
    </SectionWrapper>
  );
};

export default Instagram;
