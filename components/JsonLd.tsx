import Script from 'next/script'

interface Props {
  id: string
  data: object
}

// Inietta JSON-LD strutturato Schema.org nel <head> tramite next/script
export function JsonLd({ id, data }: Props) {
  return (
    <Script id={id} type="application/ld+json" strategy="beforeInteractive">
      {JSON.stringify(data)}
    </Script>
  )
}
