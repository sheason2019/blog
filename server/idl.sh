omi-codegen -l go -t server -packageRoot github.com/sheason2019/blog/omi -o omi ../idl

find ./omi -name "*.go" | xargs gofmt -w