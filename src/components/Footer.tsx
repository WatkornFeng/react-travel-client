import { Link } from "react-router-dom";
import { Box, ListItem, Stack, Typography, styled } from "@mui/material";
import useMatchViewPort from "../hooks/useMatchViewPort";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import appStoreImg from "../assets/images/mobile/appStore.png";
import googlePlayImg from "../assets/images/mobile/googlePlay.png";
import LinkLogo from "./LinkLogo";
const FooterContainer = styled("footer")(({ theme, property }) => ({
  width: "100%",
  minHeight: "400px",
  backgroundColor: `${theme.palette.secondary.main}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "50px",
  position: property === "fixed" ? "fixed" : undefined,
  bottom: property === "fixed" ? 0 : undefined,
}));
const FooterSection = styled("section")({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  maxWidth: "1200px",
  marginBottom: "50px",
});
const Content = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  color: `${theme.palette.secondary.light}`,

  "&:hover": {
    textDecoration: "underline",
  },
}));
const ContentList = styled(ListItem)(({ theme }) => ({
  paddingLeft: "0",
  color: `${theme.palette.secondary.light}`,
  display: "flex",
  justifyContent: "flex-start",
}));

interface ISocialData {
  social: string;
  icon: JSX.Element;
}
const aboutCompanies = ["How to Book", "About us", "Careers"];

const products = ["Hotels", "Tours"];
const socialMedia: ISocialData[] = [
  {
    social: "Facebook",
    icon: <FacebookIcon />,
  },
  {
    social: "Twitter",
    icon: <TwitterIcon />,
  },
  {
    social: "Instagram",
    icon: <InstagramIcon />,
  },
];

interface Props {
  data: string[] | ISocialData[];
}
const FooterList = ({ data }: Props) => {
  return (
    <Box component="ul">
      {data.map((e, i) => (
        <ContentList key={i}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                mr: `${(e as ISocialData).icon ? "15px" : ""}`,
              }}
            >
              {(e as ISocialData).icon}
            </Box>
            <Link to="#" key={i}>
              <Content>{(e as ISocialData).social || (e as string)}</Content>
            </Link>
          </Box>
        </ContentList>
      ))}
    </Box>
  );
};
const year = new Date().getFullYear();

interface IProps {
  position?: string;
}
function Footer({ position }: IProps) {
  const matches_800 = useMatchViewPort(1000);
  return (
    <FooterContainer property={position}>
      <Stack
        direction="column"
        sx={{
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <FooterSection>
          {/*----------------Companies & About us--------------------- */}
          <Box
            width={matches_800 ? "50%" : "40%"}
            sx={{
              padding: "10px",
            }}
          >
            <LinkLogo
              textColor="white"
              fontSize={matches_800 ? "small" : "verylarge"}
            />
            <Typography
              variant="subtitle1"
              color="secondary.light"
              fontWeight="bold"
            >
              Download SmileTravel App
            </Typography>
            <Stack sx={{ justifyContent: "center" }}>
              <Link to="#">
                <Box
                  component="img"
                  src={googlePlayImg}
                  height={"50px"}
                  width={"150px"}
                  sx={{
                    filter: "grayscale(100%)",
                    "&:hover": {
                      filter: "grayscale(0%)",
                    },
                  }}
                />
              </Link>
              <Link to="#">
                <Box
                  component="img"
                  src={appStoreImg}
                  height={"50px"}
                  width={"150px"}
                  sx={{
                    filter: "grayscale(100%)",
                    "&:hover": {
                      filter: "grayscale(0%)",
                    },
                  }}
                />
              </Link>
            </Stack>
          </Box>
          <Box
            width={matches_800 ? "50%" : "20%"}
            sx={{
              padding: "10px",
            }}
          >
            <Typography
              variant="subtitle1"
              color="secondary.light"
              fontWeight="bold"
            >
              About SmileTravel
            </Typography>
            <FooterList data={aboutCompanies} />
          </Box>

          {/*----------------Product & Follow us--------------------- */}

          <Box sx={{ padding: "10px" }} width={matches_800 ? "50%" : "20%"}>
            <Typography
              variant="subtitle1"
              color="secondary.light"
              fontWeight="bold"
            >
              Products
            </Typography>
            <FooterList data={products} />
          </Box>
          <Box
            sx={{
              padding: "10px",
            }}
            width={matches_800 ? "50%" : "20%"}
          >
            <Typography
              variant="subtitle1"
              color="secondary.light"
              fontWeight="bold"
            >
              Follow us on
            </Typography>
            <FooterList data={socialMedia} />
          </Box>
        </FooterSection>
        {/*----------------Copy right--------------------- */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            fontWeight="bold"
            fontSize="0.75rem"
            sx={{
              color: "secondary.light",
            }}
          >
            Copyright © {year} Smile Travel. All rights reserved
          </Typography>
        </Box>
      </Stack>
    </FooterContainer>
  );
}

export default Footer;
