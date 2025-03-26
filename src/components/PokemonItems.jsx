import { useState } from "react";
import Loading from "./Loading";
import Buttton from "./Buttton";

const PokemonItems = ({ data, loader, error }) => {
  const [hoverImage, setHoverImg] = useState(false);

  if (loader) return <Loading />;
  if (error) return <p className="text-red-500 text-center">Error loading Pokémon data...</p>;

  const handleMouseEnter = () => setHoverImg(true);
  const handleMouseLeave = () => setHoverImg(false);

  return (
    <div className="flex flex-col items-center justify-center text-center transition-transform duration-300 ease-in-out hover:scale-105 w-[320px]">
      <div className="relative flex flex-col w-full max-w-sm bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Pokémon Image */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative mx-auto w-full h-44 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-xl transition-all duration-500 ${
            hoverImage ? "shadow-[0px_0px_30px_5px_rgba(0,0,255,0.5)]" : ""
          }`}
        >
          {/* Animated Glow Effect */}
          <div
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-full bg-white opacity-10 blur-lg transition-all duration-500 ${
              hoverImage ? "scale-110 opacity-20" : "opacity-10"
            }`}
          ></div>

          {data.sprites?.other?.dream_world?.front_default ? (
            <img
              src={data.sprites.other.dream_world.front_default}
              alt={data.name}
              className="w-36 h-36 object-contain transition-all duration-500 ease-in-out"
            />
          ) : (
            <p className="text-white text-center">No Image Available</p>
          )}
        </div>

        {/* Pokémon Details */}
        <div className="p-5">
          <h5 className="text-lg font-bold text-blue-gray-900 capitalize">{data.name || "Unknown"}</h5>

          {/* Pokémon Type Button */}
          <div className="mt-3">
            <Buttton text={data.types?.[0]?.type?.name || "Unknown"} />
          </div>

          {/* Stats */}
          <div className="mt-5 text-sm font-medium capitalize">
            <div className="flex justify-between items-center border-b pb-2">
              <p>Height: {data.height ?? "N/A"}</p>
              <p>Weight: {data.weight ?? "N/A"}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p>XP: {data.base_experience ?? "N/A"}</p>
              <p>Base Stats: {data.stats?.[0]?.base_stat ?? "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonItems;
