const SchemaMarkup = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "California Free Solar Program",
          "url": "https://californiasolarprogram.org",
          "description": "Apply for California's free solar and battery program through the Self-Generation Incentive Program (SGIP). Qualify for 100% state-subsidized solar panels and battery storage systems with no cost to you.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://californiasolarprogram.org/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }`,
      }}
    />
  )
}

export default SchemaMarkup
