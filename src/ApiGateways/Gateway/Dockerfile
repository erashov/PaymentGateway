FROM microsoft/dotnet:2.2-aspnetcore-runtime-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk-stretch AS build
WORKDIR /src
COPY ["src/ApiGateways/Gateway/Gateway.csproj", "src/ApiGateways/Gateway/"]
RUN dotnet restore "src/ApiGateways/Gateway/Gateway.csproj"
COPY . .
WORKDIR "/src/src/ApiGateways/Gateway"
RUN dotnet build "Gateway.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Gateway.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Gateway.dll"]