import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQ() {
    return (
        <div>
            <div className="container-kws">
                <div className="section t-a-c">
                    <div className="f-s-2 f-w-600 m-b-1">Frequently Questions</div>
                    <div className="">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Laborum
                        Obcaecati Dignissimos Quae Quo Ad Iste Ipsum Officiis
                        <br /> Deleniti Asperiores Sit.
                    </div>
                </div>
                <div className="section">
                    <div className="m-y-1">
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="expand-icon b-c-t c-b " />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="f-w-600">What Is MiNFT ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="b-c-p-c-11 c-w">
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                                    sapien, lacus vitae sapien nulla amet risus nunc. Faucibus
                                    nunc, egestas quis semper porttitor. Fermentum magna commodo
                                    sodales curabitur. Pharetra, gravida nunc aliquam dolor id
                                    magna eu orci. Porttitor magna nulla est amet dolor ultricies
                                    egestas gravida. Nulla pellentesque convallis ligula placerat
                                    consectetur tortor, lobortis velit risus.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    <div className="m-y-1">
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="expand-icon b-c-t c-b " />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="f-w-600">How We Can Buy And Invest NFT ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="b-c-p-c-11 c-w">
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                                    sapien, lacus vitae sapien nulla amet risus nunc. Faucibus
                                    nunc, egestas quis semper porttitor. Fermentum magna commodo
                                    sodales curabitur. Pharetra, gravida nunc aliquam dolor id
                                    magna eu orci. Porttitor magna nulla est amet dolor ultricies
                                    egestas gravida. Nulla pellentesque convallis ligula placerat
                                    consectetur tortor, lobortis velit risus.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    <div className="m-y-1">
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="expand-icon b-c-t c-b " />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="f-w-600">Why We Should Choose Reelz ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="b-c-p-c-11 c-w">
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                                    sapien, lacus vitae sapien nulla amet risus nunc. Faucibus
                                    nunc, egestas quis semper porttitor. Fermentum magna commodo
                                    sodales curabitur. Pharetra, gravida nunc aliquam dolor id
                                    magna eu orci. Porttitor magna nulla est amet dolor ultricies
                                    egestas gravida. Nulla pellentesque convallis ligula placerat
                                    consectetur tortor, lobortis velit risus.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    <div className="m-y-1">
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="expand-icon b-c-t c-b " />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="f-w-600">How Secure Is This Token ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="b-c-p-c-11 c-w">
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                                    sapien, lacus vitae sapien nulla amet risus nunc. Faucibus
                                    nunc, egestas quis semper porttitor. Fermentum magna commodo
                                    sodales curabitur. Pharetra, gravida nunc aliquam dolor id
                                    magna eu orci. Porttitor magna nulla est amet dolor ultricies
                                    egestas gravida. Nulla pellentesque convallis ligula placerat
                                    consectetur tortor, lobortis velit risus.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    <div className="m-y-1">
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="expand-icon b-c-t c-b " />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="f-w-600">How Quickly Can I Get Customer Support?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="b-c-p-c-11 c-w">
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                                    sapien, lacus vitae sapien nulla amet risus nunc. Faucibus
                                    nunc, egestas quis semper porttitor. Fermentum magna commodo
                                    sodales curabitur. Pharetra, gravida nunc aliquam dolor id
                                    magna eu orci. Porttitor magna nulla est amet dolor ultricies
                                    egestas gravida. Nulla pellentesque convallis ligula placerat
                                    consectetur tortor, lobortis velit risus.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
