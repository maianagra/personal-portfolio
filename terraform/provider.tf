provider "aws" {
  region = "us-west-2" # or your preferred region
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}
