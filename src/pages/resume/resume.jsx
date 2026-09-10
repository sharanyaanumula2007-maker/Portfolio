import './resume.css';
import { Header } from "../../components/Header";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../../assets/Resume.pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

export function Resume() {
    return (
        <>
            <Header />
            <div className="resume-container">
                <a href={resume} download="Resume.pdf" className="download-btn">
                    Download Resume
                </a>
                <Document file={resume}>
                    <Page pageNumber={1} width={750}/>
                </Document>
            </div>
        </>
    );
}