# TeaDoc Style (v0.3pre)
<small>*A TeaTeam document format*</small>

**[ES]**

*Creador: KBeDeveloper*<br/>
*Fecha:   Junio 5, 2019*

## ¿Qué es?

El estilo de documento TeaDoc propone una nueva forma de hacer documentos académicos, científicos y de ensayo. Su propuesta es facilitar la organización, composición y lectura de documentos tales como: sumarios, actas, ensayos literarios y archivos de hipertexto, además de otros posibles documentos exportables.

## ¿En qué consiste?

Se establecen una serie de reglas y recursos a utilizar para construir un documento versátil, adaptándose a los nuevos canales de comunicación, ya sean archivos [PDF](https://acrobat.adobe.com/la/es/acrobat/about-adobe-pdf.html) ([Adobe&reg;](https://adobe.com/)), libros o documentos literarios tipo [EPUB](https://www.w3.org/publishing/groups/epub3-cg/), archivos [ODF](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=office), [DOCX](https://www.ecma-international.org/publications/standards/Ecma-376.htm), [RTF](https://docs.microsoft.com/en-us/windows/desktop/msi/rtf-type), [GDOC](https://www.google.com/docs/about/), [MD](https://daringfireball.net/projects/markdown/) y otros formatos similares o derivados.

## Reglas y consideraciones

#### Ámbito



#### Formato

Bajo instancias generales, se debe precisar de dos configuraciones:

##### Estilo diurno

```javascript
    {
        version: "0.1pre",
        name: "TeaDoc Day Style",
        fonts: {
            Calibri_url: "./Fonts/Calibri",
            OpenSans_url: "./Fonts/Open\ Sans"
        },            
        font_config:{
            header_text1: {
                ""
            },
            header_text2: {
                ""
            },
            meta_header: {
                ""
            },
            text_default: {
                ""
            },
            title: {
                ""
            },
            subtitle: {
                ""
            },
            heading1: {
                ""
            },
            heading1_text: {
                ""
            },
            heading2: {
                ""
            },
            heading2_text: {
                ""
            },
            heading3: {
                ""
            },
            heading3_text: "",
            heading4: "",
            heading4_text: "",
            heading5: "",
            heading5_text: "",
            heading6: "",
            heading6_text: "",
            note1: "",
            note2: "",
            note3: "",
            link: "",
            page_number: "",
        },
        colors: {
            page_background: "#FFFFFF",
            header_text1: "#666666",
            header_text2: "#666666",
            meta-header: "#000000",
            text-default: "#000000",
            title: "#073763",
            subtitle: "#0b5394",
            heading1: "#073763",
            heading1_text: "#000000",
            heading2: "#0b5394",
            heading2_text: "#000000",
            heading3: "#000000",
            heading3_text: "#000000",
            heading4: "#434343",
            heading4_text: "#000000",
            heading5: "#666666",
            heading5_text: "#666666",
            heading6: "#666666",
            heading6_text: "#666666",
            note1: "#000000",
            note2: "#000000",
            note3: "#000000",
            link: "#1155cc",
            page_number: "#000000",
            table_header_background: "#d9d9d9",
            table_border: "#000000"
        },
        page: {
            size: "A4",
            orientation: "portrait",
            margin: {
                top: "3.25cm",
                bottom: "2.54cm",
                left: "2.54cm",
                right: "2.54cm"
            },
            padding: {

            }
        },
        author: {
            org: "TeaTeam",
            member: "KBeDeveloper"
        },
        license: "GPL-3.0"
    }
```
    
#### Estilo nocturno

```javascript
    Pendiente
```