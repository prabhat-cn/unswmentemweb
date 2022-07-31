import * as React from "react";
import { Helmet } from "react-helmet";

export default function Head({ siteMeta }) {
  const { title, description, image, author, siteUrl } = siteMeta?.siteMetadata;
  return (
    <Helmet
      htmlAttributes={{
        lang: "en-us",
      }}
    >
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
      <link rel="shortcut icon" href="/assets/img/favicon.png" />
      <title>{title}</title>
      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
      <meta property="og:title" content={title} />
      {/* {image && <meta property="og:image" content={image.url} />} */}
      {image && <meta property="og:image" content={image} />}
      {/* <meta name="twitter:card" content="summary" /> */}
      {/* <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />} */}

      <link href="/assets/css/bootstrap.css" rel="stylesheet" type="text/css" />
      <link
        href="/assets/css/swiper-bundle.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="/assets/css/aos.css" rel="stylesheet" type="text/css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      ></link>
      <link href="/assets/css/style.css" rel="stylesheet" type="text/css" />
      <link
        href="/assets/css/responsive.css"
        rel="stylesheet"
        type="text/css"
      />

      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      ></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"
      ></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/js/bootstrap.min.js"
      ></script>
      <script src="https://unpkg.com/feather-icons@4.29.0/dist/feather.min.js"></script>

      {/* <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.0.7/swiper-bundle.min.js"
      ></script> */}
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
      ></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.4/jquery.sticky.js"
      ></script>
      {/* <script type="text/javascript" src="/assets/js/custom.js"></script> */}
      <script
        charset="utf-8"
        type="text/javascript"
        src="https://js.hsforms.net/forms/v2.js"
      ></script>
      <script
        charset="utf-8"
        type="text/javascript"
        src="https://js.hsforms.net/forms/shell.js"
      ></script>
    </Helmet>
  );
}
