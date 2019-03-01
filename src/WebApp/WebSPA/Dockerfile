FROM microsoft/dotnet:2.2-aspnetcore-runtime-alpine3.8 AS base
RUN apk update && apk add nodejs nodejs-npm
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk-alpine3.8 AS build
RUN apk update && apk add nodejs nodejs-npm
WORKDIR /src
COPY ["src/WebApp/WebSPA/WebSPA.csproj", "src/WebApp/WebSPA/"]
RUN dotnet restore "src/WebApp/WebSPA/WebSPA.csproj"
COPY . .
WORKDIR "/src/src/WebApp/WebSPA"
RUN dotnet build "WebSPA.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "WebSPA.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "WebSPA.dll"]