# How To

This document describes how best to create an EPUB v2 file from the files in this
repository. This is a good starting point if you want to create an EPUB from
scratch by manually editing every file.

***IMPORTANT***: DO NOT open the mimetype file with vim or any other editor. Doing so might
"contaminate" the file by adding an invisible newline, that might not even be
visible in the editor, which EPUBs do not like.

## Inserting Content

1. Each EPUB needs its own unique ID. I would recommend you generate a UUID
    unless you have a relevant IBAN. You can for example generate a uuid using
    the command `uuidgen` on UNIX systems.
2. Replace the id everywhere you can find the string
    "B581A839-681B-4263-AFB5-BB85F1E58147". You can for example find this string
    by using grep: `grep -rn . -e "B581A839-681B-4263-AFB5-BB85F1E58147"` [^1]
3. Insert your text in all places that start with the string "xxx". In all
    places that contain human-readable text I tried to put in a placeholder in
    the format `xxx [filename] [section indicator]`. This way you can either
    open the EPUB template in a reader and see what files you need to edit, or
    you can search for the string "xxx" with `grep -rn . -e "xxx"`.
4. For every human-readable bit of text you might need to modify machine-
    readable text or references. For example the `dc:creator` tag in the
    "content.opf" file contains an attribute `opf:file-as`, which lets you tell
    software in which order you would like the author to be sorted (e.g. name:
    Mark Twain, `opf:file-as`: Twain, Mark).

### Machine-Readables Change

This section should list most and hopefully all machine-readable data that I
would recommend you update when creating a new EPUB. This will not include
machine-readable data that is directly related to human-readable text marked
with "xxx" like `opf:file-as`(see above). The references use the
[CSS selectors syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

* content.opf
    * `dc:language`
    * `meta[name="calibre:title_sort]` (for calibre)
* toc.ncx
    * `meta[name="dtb:depth"]`

## Compiling to EPUB

To create an EPUB file from these files, follow the following steps.

1. Run the command
    `zip -X0 out/[name].epub mimetype && zip -9 -r out/[name].epub META-INF/ OEBPS/`
    to create the EPUB as the file "test.epub".
2. To make sure there are no major mistakes in your EPUB file you should run
    `epubcheck [name].epub`. If you get any errors you can just rerun the above
    command. You don't need to delete the faulty EPUB file before.

## Footnotes

[^1]: I don't specify files or even file lines so that I don't forget to mention
something import which would cause an issue in the final EPUB. This way I know
that if my EPUB template is valid and you search for all of the occurences of
this ID, your EPUB will be correct as well.

