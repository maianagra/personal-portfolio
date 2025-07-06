provider "aws" {
  region = var.region
}

provider "aws" {
  alias  = "eu_west_1"
  region = "eu-west-1"
}