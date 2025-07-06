data "aws_route53_zone" "main" {
  name         = "maianagra.com."
  private_zone = false
}
