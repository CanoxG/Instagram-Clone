import "./Sidemenu.css";
import AvatarCard from "../avatar-card/AvatarCard";
import Button from "../buttoms/Buttom";
import Suggestion from "../suggestions/Suggestion";
import SuggestionCard from "../suggestion-card/SuggestionCard";

export default function SideMenu({
  style = "suggestionsText",
  position = "textAlign",
  color = "blue",
}) {
  return (
    <div className="sideMenu">
      <Suggestion>
        <AvatarCard />
      </Suggestion>
      <Suggestion style={style} position={position}>
        Suggestions For You
        <Button>See all</Button>
      </Suggestion>
      <Suggestion>
        <SuggestionCard />
        <Button color={color}>Follow</Button>
      </Suggestion>
      <Suggestion>
        <SuggestionCard />
        <Button color={color}>Follow</Button>
      </Suggestion>
      <Suggestion>
        <SuggestionCard />
        <Button color={color}>Follow</Button>
      </Suggestion>
    </div>
  );
}
