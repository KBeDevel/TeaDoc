# TeaDoc Document Style (v0.1pre)
<small>*A TeaTeam document format*</small>

**[ES]**

Creador: KBeDeveloper
Fecha:   Junio 5, 2019

¿Qué es?
--------
El formato TeaDoc propone una nueva forma de hacer documentos académicos, científicos y de ensayo. Su propuesta es facilitar la organización, composición y lectura de documentos tales como: sumarios, actas, ensayos literarios y archivos de hipertexto.

¿En qué consiste?
-----------------
Se establecen una serie de reglas y recursos a utilizar para construir un documento versátil, adaptándose a los nuevos canales de lectura y comunicación, tales como: archivos <a href="https://acrobat.adobe.com/la/es/acrobat/about-adobe-pdf.html" target="_blank">*Portable Document File* (PDF)</a> de <a href="https://adobe.com/" target="_blank">Adobe&reg;</a>, libros o documentos literarios tipo <a href="https://www.w3.org/publishing/groups/epub3-cg/" target="_blank">EPUB</a>, además de ser completamente compatibles con archivos <a href="https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=office" target="_blank">ODF</a>, <a href="https://www.ecma-international.org/publications/standards/Ecma-376.htm" target="_blank">DOCX</a>, <a href="https://docs.microsoft.com/en-us/windows/desktop/msi/rtf-type" target="_blank">RTF</a>, <a href="https://www.google.com/docs/about/" target="_blank">GDOC</a>, <a href="https://daringfireball.net/projects/markdown/" target="_blank">MD</a> y otros similares o derivados.

Reglas y consideraciones
------------------------
Bajo instancias generales, se debe precisar de dos configuraciones generales:

**Estilo diurno**

<pre>
    <code>
    {
        "version": "0.1pre",
        "name": "TeaDoc Day Style",
        "fonts": {
            "Calibri_url": "./Fonts/Calibri",
            "OpenSans_url": "./Fonts/Open\ Sans"
        },            
        "font_config":{
            "header_text1": {
                ""
            },
            "header_text2": {
                ""
            },
            "meta_header": {
                ""
            },
            "text_default": {
                ""
            },
            "title":, {
                ""
            },
            "subtitle": {
                ""
            },
            "heading1": {
                ""
            },
            "heading1_text": {
                ""
            },
            "heading2": {
                ""
            },
            "heading2_text": {
                ""
            },
            "heading3": {
                ""
            },
            "heading3_text": "",
            "heading4": "",
            "heading4-text": "",
            "heading5": "",
            "heading5-text": "",
            "heading6": "",
            "heading6-text": "",
            "note1": "",
            "note2": "",
            "note3": "",
            "link": "",
            "page-number": "",
        },
        colors: {
            "page-background": "#FFFFFF",
            "header-text1": "#666666",
            "header-text2": "#666666",
            "meta-header": "#000000",
            "text-default": "#000000",
            "title:", "#073763",
            "subtitle": "#0b5394",
            "heading1": "#073763",
            "heading1_text": "#000000",
            "heading2": "#0b5394",
            "heading2-text": "#000000",
            "heading3": "#000000",
            "heading3-text": "#000000",
            "heading4": "#434343",
            "heading4-text": "#000000",
            "heading5": "#666666",
            "heading5-text": "#666666",
            "heading6": "#666666",
            "heading6-text": "#666666",
            "note1": "#000000",
            "note2": "#000000",
            "note3": "#000000",
            "link": "#1155cc",
            "page-number": "#000000",
            "table-header-background": "#d9d9d9",
            "table-border": "#000000"
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
    </code>
</pre>
    
**Estilo nocturno**
<pre>
    <code>
        Pendiente
    </code>
</pre>