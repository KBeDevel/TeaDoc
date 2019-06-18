# TeaDoc&copy; Style (v0.4pre)
<p>Project progress:</p>

![](http://progressed.io/bar/11)

A **TeaTeam** contribution

*Creator: KBeDeveloper*

<hr>

**[ES]**

## ¿Qué es?

El estilo de documento TeaDoc propone una nueva forma de hacer documentos académicos, científicos y de ensayo. Su propuesta es facilitar la organización, composición y lectura de documentos tales como: sumarios, actas, ensayos literarios y archivos de hipertexto, además de otros posibles documentos exportables.

## ¿En qué consiste?

Se establecen una serie de reglas y recursos a utilizar para construir un documento versátil, adaptándose a los nuevos canales de comunicación, ya sean archivos [PDF](https://acrobat.adobe.com/la/es/acrobat/about-adobe-pdf.html) ([Adobe&reg;](https://adobe.com/)), libros o documentos literarios tipo [EPUB](https://www.w3.org/publishing/groups/epub3-cg/), archivos [ODF](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=office), [DOCX](https://www.ecma-international.org/publications/standards/Ecma-376.htm), [RTF](https://docs.microsoft.com/en-us/windows/desktop/msi/rtf-type), [GDOC](https://www.google.com/docs/about/), [MD](https://daringfireball.net/projects/markdown/), próximamente [LaTeX](https://www.latex-project.org/) y otros formatos similares o derivados.

## Reglas y consideraciones

#### Acuerdos y licencias

En el caso de la fuente **Calibri&copy;** de [**Microsoft**&copy;](https://www.microsoft.com/), es necesario mencionar que su uso está sujeto a términos y condiciones presentadas por [Monotype&copy;](https://www.monotype.com), las cuales puedes consultar [aquí](./Fonts/Calibri/).

#### Formato

Bajo instancias generales, se debe precisar las configuraciones de **día** y de **noche [NO LANZADA]**

<hr>

**[EN]**

## What is this?

PENDING TRANSLATION

## What is it all about?

PENDING TRANSLATION

## Rules & considerations

#### Licenses & agreetments

PENDING TRANSLATION

#### Format

PENDING TRANSLATION

<hr>

## [ES] Reglas
## [EN] Reglas

##### [ES] Estilo diurno
##### [EN] Day Style

```javascript
    {
        version: "0.4pre",
        name: "TeaDoc Day Style",
        fonts: {
            main_font_url: "Fonts/Open\ Sans",
            alt_font_url: "Fonts/Calibri"
        },            
        font_setup:{
            header_text1: {
                font_size: "8px",
                weight: "bold",
                type: "normal"
            },
            header_text2: {
                font_size: "8px",
                weight: "normal",
                type: "normal"
            },
            meta_header: {
                font_size: "17px",
                weight: "bold",
                type: "normal"
            },
            text_default: {
                font_size: "12px",
                weight: "normal",
                type: "normal"
            },
            title: {
                font_size: "26px",
                weight: "bold",
                type: "normal"
            },
            subtitle: {
                font_size: "20px",
                weight: "normal",
                type: "normal"
            },
            heading1: {
                font_size: "20px",
                weight: "bold",
                type: "normal"
            },
            heading1_text: {
                font_size: "12px",
                weight: "normal",
                type: "normal"
            },
            heading2: {
                font_size: "17px",
                weight: "bold",
                type: "normal"
            },
            heading2_text: {
                font_size: "12px",
                weight: "normal",
                type: "normal"
            },
            heading3: {
                font_size: "14px",
                weight: "bold",
                type: "normal"
            },
            heading3_text: {
                font_size: "12px",
                weight: "normal",
                type: "normal"
            },
            heading4: {
                font_size: "12px",
                weight: "bold",
                type: "normal"
            },
            heading4_text: {
                font_size: "12px",
                weight: "normal",
                type: "normal"
            },
            heading5: {
                font_size: "11px",
                weight: "bold",
                type: "normal"
            },
            heading5_text: {
                font_size: "11px",
                weight: "normal",
                type: "normal"
            },
            heading6: {
                font_size: "11px",
                weight: "bold",
                type: "italic"
            },
            heading6_text: {
                font_size: "11px",
                weight: "normal",
                type: "italic"
            },
            note1: {
                font_size: "10px",
                weight: "normal",
                type: "italic"
            },
            note2: {
                font_size: "10px",
                weight: "normal",
                type: "italic"
            },
            note3: {
                font_size: "10px",
                weight: "normal",
                type: "italic"
            },
            link: {
                font_size: "12px",
                weight: "normal",
                type: "normal"
            },
            page_number: {
                font_size: "12px",
                weight: "normal",
                type: "normal"
            },
        },
        colors: {
            page_background: "#FFFFFF",
            header_text1: "#666666",
            header_text2: "#666666",
            meta_header: "#000000",
            text_default: "#000000",
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
            size: ["A4","Letter"],
            orientation: "portrait",
            margin: {
                top: "3.25cm",
                bottom: "2.54cm",
                left: "2.54cm",
                right: "2.54cm"
            }
        },
        author: {
            org: "TeaTeam",
            member: "KBeDeveloper"
        },
        license: "GPL-3.0"
    }
```
    
#### [ES] Estilo nocturno
#### [EN] Night style

```javascript
    {
        status: "pending"
    }
```