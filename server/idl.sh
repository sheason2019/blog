omi-codegen -l go -t server -packageRoot github.com/sheason2019/blog/omi -o omi ../idl/blog.omi

find ./omi -name "*.go" | xargs gofmt -w