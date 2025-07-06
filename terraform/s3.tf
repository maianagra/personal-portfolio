resource "aws_s3_bucket" "site_bucket" {
  bucket        = "maianagra.com"
  force_destroy = true
}

resource "aws_s3_bucket_website_configuration" "site_bucket_website" {
  bucket = aws_s3_bucket.site_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}
