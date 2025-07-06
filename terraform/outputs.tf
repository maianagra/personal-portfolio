output "bucket_name" {
  value = aws_s3_bucket.site_bucket.bucket
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.cdn.domain_name
}