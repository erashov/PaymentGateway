FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-alpine AS base
#RUN apk update && apk add nodejs nodejs-npm
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-alpine AS build
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
