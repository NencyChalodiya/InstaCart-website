import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function QuestionAnswers() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="#343538"
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        Common Questions
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Accordion elevation={0}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
              How does Instacart delivery and curbside pickup work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              Instacart makes it easy to order from your favorite stores. Shop
              for items from stores near you, with a selection of more than 500
              retailers and trusted local grocers across North America. Then,
              Instacart will connect you with a personal shopper in your area to
              shop and deliver your order. Contactless delivery is available
              with our “Leave at my door” option.
              <br />
              You can track your order’s progress and communicate with your
              shopper every step of the way using the Instacart app or website.
              <br />
              Instacart also offers curbside pickup at select retail locations.
              Simply place your order and choose a pickup time, and a shopper
              will prepare your order at the store.
              <br />
              When you get to the store, use the Instacart app to notify us.
              Depending on the store, a shopper or store employee will bring the
              groceries to your car, or you can pick them up at the designated
              area.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={0}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2">
              How much does Instacart cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              You don’t need a membership to order with Instacart. In fact, you
              can even order from warehouse clubs, like Costco, Sam’s Club, and
              BJ’s Wholesale Club, without a retailer club membership.
              <br />
              To get started, create an account, select the store you want to
              shop, and place your order. New customers may be eligible for free
              delivery promotions.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={0}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Will I pay the same price on Instacart as I would in store?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              Retail partners set the prices of items on the Instacart
              marketplace. While many retailers offer everyday store prices on
              Instacart, some retailers may set prices on the Instacart platform
              that are different from in-store prices.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={0} 
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
              What happens if something is out of stock and I need to give
              specific instructions?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              Instacart makes it easy to communicate with your shopper. When an
              item you want is out-of-stock at the store, your shopper will
              follow your replacement preferences.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
