import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { Button } from "@mui/material";

import CustomModal from "../../components/CustomModal";

interface Props {
  textBtn?: string;
  nameBtn?: string;
}

export interface IQueriesObj {
  rating: string;
  sort: string;
  adult: number;
  child: number;
  room: number;
  from: number | undefined;
  to: number | undefined;
}

export interface Params {
  adult: number;
  child: number;
  room: number;
  endDate: string;
  startDate: string;
  rating: string;
  sort: string;
  stars: number[];
  types: string[];
}

function SearchButton({ textBtn, nameBtn }: Props) {
  const place = useSelector((state: RootState) => state.search.place);

  const { search } = useLocation();
  const navigate = useNavigate();

  const { placeParam } = useParams();

  const [toggledModal, setToggledModal] = useState(false);

  const handleClickSearch = () => {
    const urlParams = new URLSearchParams(search);
    const sortQuery = urlParams.get("sort");
    const ratingQuery = urlParams.get("rating");

    urlParams.set("sort", sortQuery || "PRICE_LOW_TO_HIGH");
    urlParams.set("rating", ratingQuery || "Any");
    const searchQuery = urlParams.toString();

    let province: string | undefined = "";
    if (!place && !placeParam) {
      return setToggledModal(true); // both are missing → show modal
    }

    province = place?.name ?? placeParam; // prioritize Redux place first

    navigate(`/hotels/${province}?${searchQuery}`);
  };

  return (
    <>
      <CustomModal
        toggled={toggledModal}
        setToggled={setToggledModal}
        isNavigated={false}
        content={{
          topic: "You are not select Province !",
          details:
            "Please select the name of a province in Thailand to proceed...",
        }}
      />
      <Button
        variant="contained"
        sx={{
          width: "100%",
          minHeight: "56px",
          height: "100%",
        }}
        onClick={handleClickSearch}
      >
        {nameBtn} {textBtn}
      </Button>
    </>
  );
}

export default SearchButton;
