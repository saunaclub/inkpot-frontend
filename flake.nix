{
  description = "Inkpot frontend dev environment";
  inputs.nixpkgs.url = github:NixOS/nixpkgs;

  outputs = { self, nixpkgs }:
  let
    system = "x86_64-linux";
    pkgs = import nixpkgs { inherit system; };
    lib = pkgs.lib;
  in {
    devShell.${system} = pkgs.mkShell rec {
      buildInputs = with pkgs; [
        nodejs-16_x
        nodePackages.npm
        nodePackages.pnpm
      ];
    };
  };
}
