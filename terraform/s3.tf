resource "aws_s3_bucket" "site_bucket" {
  bucket = var.domain_name

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  force_destroy = true
}

resource "aws_s3_bucket_policy" "site_policy" {
  bucket = aws_s3_bucket.site_bucket.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = "*",
        Action = "s3:GetObject",
        Resource = "${aws_s3_bucket.site_bucket.arn}/*"
      }
    ]
  })
}